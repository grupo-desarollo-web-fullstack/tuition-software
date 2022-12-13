import { Strategy as JwtStrategy , ExtractJwt } from 'passport-jwt';

const jwtStrategy = (options) => new JwtStrategy({
    ...options,
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:"secret"
}, async (payload,done) => {
    try {
        const data = await getDataUniqueFromModel("estudiante", {
            where: {
              estudiante_id: payload.id,
            },
          });
          return done(null, data);
    } catch (error) {
        done(error,null)
    }
})

export default jwtStrategy