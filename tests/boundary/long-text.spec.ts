import { expect, test } from '@playwright/test';
import { TodoPage } from '../../pages/TodoPage';
import { TODO_DATA } from '../../test-data/todo-data';

test('边界测试 - 长文本可显示并保存', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.goto();

  await todoPage.addTodo(TODO_DATA.longText);
  await expect(todoPage.todoLabels).toHaveText([TODO_DATA.longText]);

  await page.reload();
  await expect(todoPage.todoLabels).toHaveText([TODO_DATA.longText]);
});
