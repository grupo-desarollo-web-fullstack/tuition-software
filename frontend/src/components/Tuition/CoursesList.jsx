import Button from "@components/Button";
import { Reorder } from "framer-motion";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineClear } from "react-icons/ai";
import { TbNotebook } from "react-icons/tb";
import { Form, Link } from "react-router-dom";
import WarningCourses from "@components/warnings/WarningCourses";
import Course from "./Course";

const CoursesList = ({ courses, setCourses, coursesFromLoader }) => {
  const refLabel = useRef();
  const refInput = useRef();
  const labelFocusUI = () =>
    refLabel.current.classList.toggle("tuition__courses__filter-label--focus");
  const filterCourses = () => {
    const coursesFiltered = coursesFromLoader.filter((course) =>
      course.nombre.toLowerCase().includes(refInput.current.value.toLowerCase())
    );
    setCourses(coursesFiltered);
  };
  const handleSubmitFilter = (e) => {
    e.preventDefault();
    filterCourses();
  };
  const handleSubmitClear = () => {
    refInput.current.value = "";
    filterCourses();
  };
  return (
    <>
      <Form
        onSubmit={handleSubmitFilter}
        className="tuition__courses__filter-form"
      >
        <label
          ref={refLabel}
          htmlFor="filter"
          className="tuition__courses__filter-label"
        >
          <TbNotebook size={20} />
          <input
            ref={refInput}
            onFocus={labelFocusUI}
            onBlur={labelFocusUI}
            type="text"
            placeholder="Busca el curso que necesites"
            className="tuition__courses__filter-input"
            id="filter"
          />
        </label>
        <Button modifiers={["dark", "search"]}>
          <FaSearch />
        </Button>
        <Button onClick={handleSubmitClear} modifiers={["clear"]}>
          <AiOutlineClear name="clear" color="#F5F2E7" size={20} />
        </Button>
      </Form>
      {!courses.length ? (
        <WarningCourses
          error={
            refInput.current?.value
              ? `No encontramos algún curso con el nombre ${refInput.current.value}`
              : `No contamos con cursos disponibles para tí por el momento 😢📘`
          }
        />
      ) : (
        <Reorder.Group
          className="tuition__courses__list"
          axis="y"
          values={courses}
          onReorder={setCourses}
        >
          {courses.map((course) => (
            <Reorder.Item
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              whileDrag={{ scale: 1.02 }}
              whileTap={{ scale: 1.02, rotate: 0.5 }}
              key={course.id}
              className="tuition__courses__item"
              value={course}
            >
              <Link
                className="tuition__courses__link"
                to={`./lessons/${course.id}`}
              >
                <Course key={course.id} course={course} />
              </Link>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      )}
    </>
  );
};

export default CoursesList;
