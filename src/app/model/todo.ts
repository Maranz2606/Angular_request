enum todoAttributes {
  id= 'id',
  title= 'title',
  completed= 'completed',
  userId= 'userId'
}

export class Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;

  static fromJson(json: any): Todo {
    const todo = new Todo();
    todo.id = json[todoAttributes.id];
    todo.title = json[todoAttributes.title];
    todo.completed = json[todoAttributes.completed];
    todo.userId = json [todoAttributes.userId];
    return todo;
  }
}
