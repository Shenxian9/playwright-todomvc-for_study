import { expect, Locator, Page } from '@playwright/test';

export class TodoPage {
  readonly page: Page;
  readonly newTodoInput: Locator;
  readonly todoItems: Locator;
  readonly todoLabels: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newTodoInput = page.locator('.new-todo');
    this.todoItems = page.locator('.todo-list li');
    this.todoLabels = page.locator('.todo-list li label');
  }

  async goto() {
    await this.page.goto('/');
    await expect(this.newTodoInput).toBeVisible();
  }

  async addTodo(text: string) {
    await this.newTodoInput.fill(text);
    await this.newTodoInput.press('Enter');
  }

  async addTodos(texts: string[]) {
    for (const text of texts) {
      await this.addTodo(text);
    }
  }

  todoItemByText(text: string) {
    return this.page.locator('.todo-list li', { hasText: text });
  }

  async completeTodo(text: string) {
    await this.todoItemByText(text).locator('.toggle').check();
  }

  async deleteTodo(text: string) {
    const item = this.todoItemByText(text);
    await item.hover();
    await item.locator('.destroy').click();
  }

  async filterAll() {
    await this.page.getByRole('link', { name: 'All' }).click();
  }

  async filterActive() {
    await this.page.getByRole('link', { name: 'Active' }).click();
  }

  async filterCompleted() {
    await this.page.getByRole('link', { name: 'Completed' }).click();
  }

  async getTodoCount() {
    return this.todoItems.count();
  }

  async isTodoPresent(text: string) {
    return (await this.todoItemByText(text).count()) > 0;
  }

  async refreshAndAssertPersisted(text: string, completed = false) {
    await this.page.reload();
    const item = this.todoItemByText(text);
    await expect(item).toBeVisible();
    if (completed) {
      await expect(item).toHaveClass(/completed/);
    }
  }
}
