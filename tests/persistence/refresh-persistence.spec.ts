import { test } from '@playwright/test';
import { TodoPage } from '../../pages/TodoPage';
import { TODO_DATA } from '../../test-data/todo-data';

test('持久化测试 - 刷新后待办状态保留', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.goto();

  await todoPage.addTodo(TODO_DATA.persistence);
  await todoPage.completeTodo(TODO_DATA.persistence);

  await todoPage.refreshAndAssertPersisted(TODO_DATA.persistence, true);
});
