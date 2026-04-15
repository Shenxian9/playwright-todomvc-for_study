import { expect, test } from '@playwright/test';
import { TodoPage } from '../../pages/TodoPage';

test('边界测试 - 空输入不能新增', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.goto();

  await todoPage.newTodoInput.fill('   ');
  await todoPage.newTodoInput.press('Enter');

  await expect(todoPage.todoItems).toHaveCount(0);
});
