import { ConfigAxios, React, useState, useEffect } from "../export";

const Comment = ({ showComment, fotoId, Comments, updateData, user}) => {
  const [arrComments, setArrComments] = useState(Comments ? [...Comments] : []);
  const [value, setValue] = useState("");
  useEffect(() => {
    setArrComments(Comments ? [...Comments] : []);
  }, [Comments]);

  async function sendComment(e, commentId = null) {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("foto_id", fotoId);
    formData.set("isi", value); // pake 'isi' dari state

    let response;
    if (commentId) {
      response = await ConfigAxios.put(`/komentar/${commentId}`, formData);
    } else {
      response = await ConfigAxios.post("/komentar", formData);
    }

    // Memicu pembaruan data pada komponen Detail
    updateData();
    // Clear the input value after sending or updating a comment
    setValue("");
  }

  async function deleteComment(commentId) {
    const response = await ConfigAxios.delete(`/komentar/${commentId}`);
    setArrComments(arrComments.filter((comment) => comment.id !== commentId));
  }

  async function updateComment(commentId, commentIsi) {
    // Set the input value with the selected comment's content
    setValue(commentIsi);

    const formData = new FormData();
    formData.append("isi", value); // Use the updated 'isi' from the state

    // Send the PUT request to update the existing comment
    const response = await ConfigAxios.put(`/komentar/${commentId}`, formData);
    // Update the local state with the edited comment
    setArrComments(
      arrComments.map((comment) =>
        comment.id === commentId ? response.data : comment
      )
    );

    deleteComment(commentId);
  }

  return (
    <div
      className={`h-2/3 md:h-full transition-all duration-300 w-full md:w-1/3 bg-violet-200 flex flex-col fixed md:top-0 bottom-0 right-0 ${
        showComment ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="px-10 border-0 border-b-2 border-primary/50 py-5 relative">
        <p className="font-bold font-inter text-dark-green text-2xl">komentar</p>
      </div>

      <div className="h-full overflow-y-scroll flex flex-col items-start pl-10 gap-5 py-5">
        {arrComments.map((comment, i) => (
          <div
            key={i}
            className="flex justify-between items-center w-full pr-5"
          >
            <div className="flex flex-col gap-1 items-start">
              {comment.user && (
                <>
                  <p className="text-black text-sm font-inter font-semibold">
                    {comment.user.nama}
                  </p>
                  <p className="text-black text-xs ">{comment.isi}</p>
                </>
              )}
            </div>
            {user === comment.user_id && (
              <div className="flex items-center gap-5">
                <button
                  onClick={() => deleteComment(comment.id)}
                  className="text-red-500 text-xs font-semibold"
                >
                  <img width="20" height="20" src="https://img.icons8.com/material-rounded/24/waste.png" alt="waste"/>
                </button>
                <button
                  onClick={() => updateComment(comment.id, comment.isi)}
                  className="text-sky-500 text-xs font-semibold"
                >
                  <img width="20" height="20" src="https://img.icons8.com/windows/32/edit--v1.png" alt="edit--v1"/>
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <form
        onSubmit={(e) => sendComment(e)}
        className="px-5 md:px-5 border-0 gap-5 border-t-2 border-primary/50 py-5 items-center flex"
      >
        <img width="30" height="30" src="/botak.png" alt="" />
        <input
          type="text"
          name="isi"
          id="isi"
          placeholder="Ketikan sesuatu.."
          className="input-comment bg-violet-300 hover:bg-violet-400"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="bg-violet-300 h-12 w-12 rounded-lg flex items-center justify-center"
        >
          <img src="/Sent.svg" alt="" className="icon-5" />
        </button>
      </form>
    </div>
  );
};

export default Comment;
