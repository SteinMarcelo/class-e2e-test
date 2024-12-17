import { test, expect } from '@playwright/test';

test('Autenticação básica com credenciais corretas', async ({ page }) => {
  // Construir a URL com as credenciais de autenticação básica
  const url = 'https://admin:admin@the-internet.herokuapp.com/basic_auth';

  // Navegar para a URL
  await page.goto(url);

  // Verificar se a mensagem de sucesso aparece na página
  const successMessage = await page.locator('body').textContent();
  expect(successMessage).toContain('Congratulations! You must have the proper credentials.');
});
