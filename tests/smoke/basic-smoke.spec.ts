import { expect, test } from '@playwright/test';
import { TodoPage } from '../../pages/TodoPage';

test('冒烟测试 - 首页打开、输入框可见、可完成基本新增', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.goto();

  await expect(todoPage.newTodoInput).toBeVisible();
  await todoPage.addTodo('smoke-check-item');

  expect(await todoPage.getTodoCount()).toBe(1);
  await expect(todoPage.todoLabels).toHaveText(['smoke-check-item']);
});
