import { expect, test } from '@playwright/test';
import { TodoPage } from '../../pages/TodoPage';
import { TODO_DATA } from '../../test-data/todo-data';

test('边界测试 - 重复内容按页面真实行为处理', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.goto();

  await todoPage.addTodo(TODO_DATA.duplicate);
  await todoPage.addTodo(TODO_DATA.duplicate);

  // TodoMVC 允许重复项，此处按真实行为断言
  await expect(todoPage.todoLabels).toHaveText([TODO_DATA.duplicate, TODO_DATA.duplicate]);
});
