import express from "express";
import {
  getDataListFromModel,
  getDataUniqueFromModel,
  postDataListFromModel,
  updateDataUniqueFromModel,
} from "../services/db.js";
import passport from "passport";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import LocalStrategy from "passport-local";

const estudiante = express.Router();
const options = {
  secretOrKey: "secret",
};

estudiante.use(cookieParser(options.secretOrKey));

passport.use(
  new LocalStrategy({ usernameField: "user" }, async function (
    name,
    password,
    done
  ) {
    const data = await getDataUniqueFromModel("estudiante", {
      where: {
        estudiante_nombre: name,
      },
    });
    const vericatedPassword = await bcrypt.compare(
      password,
      data.estudiante_password
    );
    if (vericatedPassword) {
      return done(null, data);
    }
  })
);

estudiante.post(
  "/login",
  passport.authenticate("local", { session: false }),
  async function (req, res) {
    const { user: data } = req;
    delete data.estudiante_password;
    const token = jwt.sign(
      {
        id: data.estudiante_id,
        nombre: data.estudiante_nombre,
      },
      options.secretOrKey
    );
    res.cookie("sessionToution", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 3,
      secure: true,
      sameSite: true,
      signed: true,
    });
    res.status(201).json({
      data,
      status: 201,
    });
  }
);

estudiante.get("/", async function (req, res) {
  const data = await getDataListFromModel("estudiante");
  res.json({
    data,
    status: 200,
  });
});

estudiante.get("/:id", async function (req, res) {
  const data = await getDataUniqueFromModel("estudiante", {
    where: {
      estudiante_id: +req.params.id,
    },
  });
  res.json({
    data,
    status: 200,
  });
});

estudiante.put("/:id", async function (req, res) {
  const data = await updateDataUniqueFromModel("estudiante", {
    where: {
      estudiante_id: +req.params.id,
    },
    data: {
      estudiante_nombre: req.body.nombre,
      estudiante_carrera: req.body.carrera,
      estudiante_ciclo: +req.body.ciclo,
    },
  });
  res.status(201).json({
    data,
    status: 201,
  });
});

estudiante.post("/", async function (req, res) {
  const passwordHash = await bcrypt.hash(req.body.password, 10);
  const data = await postDataListFromModel("estudiante", {
    data: {
      estudiante_nombre: req.body.nombre,
      estudiante_carrera: req.body.carrera,
      estudiante_ciclo: +req.body.ciclo,
      estudiante_password: passwordHash,
    },
  });

  const token = jwt.sign(
    {
      id: data.estudiante_id,
      nombre: data.estudiante_nombre,
    },
    options.secretOrKey
  );
  data.token = token;
  delete data.estudiante_password;
  res.status(201).json({
    data,
    status: 201,
  });
});

export default estudiante;
