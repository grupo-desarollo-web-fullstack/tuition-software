import Button from "@components/Button";
import Lesson from "@components/Lessons/Lesson";
import { useEffect } from "react";
import { AiOutlineClear } from "react-icons/ai";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { useOutletContext, useParams, useSubmit } from "react-router-dom";

const LessonsIdIndex = () => {
  const { lessons, lessonSelected, setLessonSelected, setIsVisited } =
    useOutletContext();

  const { id } = useParams();
  const submit = useSubmit();
  const handleClickClear = () => {
    setLessonSelected(null);
  };

  const handleClickTuition = () => {
    submit(null, {
      action: `/dashboard/tuition/lessons/${id}?lesson=${lessonSelected?.id}`,
      method: "post",
    });
  };

  useEffect(() => {
    setIsVisited(true);
  }, []);
  return (
    <>
      <h2 className="tuition__lessons__title">
        {lessons?.length
          ? `Clases disponibles: (${lessons?.length})`
          : "Clases no disponibles"}
      </h2>
      <div className="tuition__lessons__list">
        {lessons.map((lesson) => (
          <Lesson
            lessonSelected={lessonSelected}
            setLessonSelected={setLessonSelected}
            key={lesson.id}
            lesson={lesson}
          />
        ))}
      </div>
      <div className="tuition__lessons__info">
        <Button onClick={handleClickTuition} modifiers="tuition">
          <HiClipboardDocumentList color="#F5F2E7" size={18} />
        </Button>
        <Button onClick={handleClickClear} modifiers="tuition">
          <AiOutlineClear color="#395b64" size={18} />
        </Button>
      </div>
    </>
  );
};

export default LessonsIdIndex;
