import { IconTrash, IconEdit } from "@tabler/icons-react";
import { IconForms } from "@tabler/icons-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import LoadingAnimation from "../../shared/animation/LoadingAnimation";
import { deleteTodo, getAllTodos, getTodo } from "../../../store/reducers/todoReducers";

function ActivityList() {
  const { todos, isLoading } = useSelector((state) => state.todos);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (!confirm("Apakah Anda Yakin Untuk Menghapus Data ?")) return;

    dispatch(deleteTodo(id));
  };

  if (isLoading) {
    return <LoadingAnimation />;
  }

  const handleEdit = (todo) => {
    dispatch(getTodo(todo.id));
    navigate("form");
  };

  return (
    <>
      <h2 className="text-center" colSpan={4}>
        List Activity
      </h2>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr className="align-middle">
              <th>No</th>
              <th>Task</th>
              <th>Description</th>
              <th>Country</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.length != 0? (
              <>
                {todos.map((todos, idx) => {
                  return (
                      <tr className="align-middle" key={todos.id}>
                        <td>{++idx}</td>
                        <td>{todos.task}</td>
                        <td>{todos.description}</td>
                        <td>{todos.country}</td>
                        <td>{todos.status}</td>
                        <td>{todos.action}</td>
                        <td>
                          <div className="d-flex gap-2 align-middle text-center">
                            <button
                              type="edit"
                              className="btn btn-primary"
                              onClick={() => handleEdit(todos)}
                            >
                              <i style={{ color: "white" }}>
                                <IconEdit />
                                Edit
                              </i>
                            </button>
                            <button
                              type="delete"
                              className="btn btn-danger"
                              onClick={() => handleDelete(todos.id)}
                            >
                              <i style={{ color: "white" }}>
                                <IconTrash />
                                Delete
                              </i>
                            </button>
                          </div>
                        </td>
                      </tr>
                  );
                })}
              </>
            ) : (
              <>
                <tr>
                  <td className="text-center" colSpan={6}>
                    Activity List Is Empty
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
      <div className="text-end">
        <button
          type="button"
          className="btn btn-primary me-2 gap-2 align-middle"
          onClick={() => navigate("form")}
        >
          <i style={{ color: "white" }}>
            <IconForms />
            Form Menu
          </i>
        </button>
      </div>
    </>
  );
}

export default ActivityList;
