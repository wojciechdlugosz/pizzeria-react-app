//selectors
export const getAllTables = ({ tables }) => tables;
export const getTableById = ({ tables }, tableId) =>
  tables.find((table) => table.id === tableId);

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const DATA_TABLES = createActionName('DATA_TABLES');

// action creators
export const getDataTables = payload => ({ type: DATA_TABLES, payload });
export const fetchTables = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/api/tables')
      .then(res => res.json())
      .then(tables => dispatch(getDataTables(tables)));
  }
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case DATA_TABLES:
      return [...action.payload]
    default:
      return statePart;
  };
};
export default tablesReducer;