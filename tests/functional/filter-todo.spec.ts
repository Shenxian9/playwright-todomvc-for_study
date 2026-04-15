import { expect, test } from '@playwright/test';
import { TodoPage } from '../../pages/TodoPage';
import { TODO_DATA } from '../../test-data/todo-data';

test('功能测试 - 按状态筛选', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.goto();
  await todoPage.addTodos(TODO_DATA.multiple.slice(0, 2));
  await todoPage.completeTodo(TODO_DATA.multiple[0]);

  await todoPage.filterActive();
  await expect(todoPage.todoLabels).toHaveText([TODO_DATA.multiple[1]]);

  await todoPage.filterCompleted();
  await expect(todoPage.todoLabels).toHaveText([TODO_DATA.multiple[0]]);

  await todoPage.filterAll();
  await expect(todoPage.todoLabels).toHaveText(TODO_DATA.multiple.slice(0, 2));
});
