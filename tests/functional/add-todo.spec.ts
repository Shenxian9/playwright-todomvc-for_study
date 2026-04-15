import { expect, test } from '@playwright/test';
import { TodoPage } from '../../pages/TodoPage';
import { TODO_DATA } from '../../test-data/todo-data';

test.describe('功能测试 - 新增待办', () => {
  let todoPage: TodoPage;

  test.beforeEach(async ({ page }) => {
    todoPage = new TodoPage(page);
    await todoPage.goto();
  });

  test('新增单个待办', async () => {
    await todoPage.addTodo(TODO_DATA.single);
    await expect(todoPage.todoLabels).toHaveText([TODO_DATA.single]);
    await expect(todoPage.page.locator('.todo-count')).toContainText('1 item left');
  });

  test('新增多个待办', async () => {
    await todoPage.addTodos(TODO_DATA.multiple);
    await expect(todoPage.todoLabels).toHaveText(TODO_DATA.multiple);
    await expect(todoPage.page.locator('.todo-count')).toContainText('3 items left');
  });
});
