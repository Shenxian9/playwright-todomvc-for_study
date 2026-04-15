import { expect, test } from '@playwright/test';
import { TodoPage } from '../../pages/TodoPage';
import { TODO_DATA } from '../../test-data/todo-data';

test('功能测试 - 删除待办', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.goto();
  await todoPage.addTodos(TODO_DATA.multiple.slice(0, 2));

  await todoPage.deleteTodo(TODO_DATA.multiple[0]);

  await expect(todoPage.todoLabels).toHaveText([TODO_DATA.multiple[1]]);
  await expect(page.locator('.todo-count')).toContainText('1 item left');
});
