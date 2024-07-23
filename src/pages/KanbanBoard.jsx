import KanbanColumn from "./KanbanColumn";

const KanbanBoard = ({ columns, moveCard, addCard, editCard, deleteCard }) => {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      <KanbanColumn
        title="To Do"
        cards={columns.todo}
        columnId="todo"
        moveCard={moveCard}
        addCard={addCard}
        editCard={editCard}
        deleteCard={deleteCard}
      />
      <KanbanColumn
        title="In Progress"
        cards={columns.inProgress}
        columnId="inProgress"
        moveCard={moveCard}
        addCard={addCard}
        editCard={editCard}
        deleteCard={deleteCard}
      />
      <KanbanColumn
        title="Done"
        cards={columns.done}
        columnId="done"
        moveCard={moveCard}
        addCard={addCard}
        editCard={editCard}
        deleteCard={deleteCard}
      />
    </div>
  );
};

export default KanbanBoard;