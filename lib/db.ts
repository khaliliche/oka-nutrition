import { sql } from '@vercel/postgres';

export async function ensureTables() {
  await sql`
    CREATE TABLE IF NOT EXISTS orders (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      city TEXT NOT NULL,
      address TEXT NOT NULL,
      offer_title TEXT NOT NULL,
      offer_description TEXT NOT NULL,
      quantity INT NOT NULL DEFAULT 1,
      total_amount NUMERIC NOT NULL,
      status TEXT NOT NULL DEFAULT 'Nouvelle',
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS stock (
      id SERIAL PRIMARY KEY,
      product_name TEXT NOT NULL UNIQUE,
      quantity INT NOT NULL DEFAULT 0
    );
  `;

    await sql`
    INSERT INTO stock (product_name, quantity)
    VALUES ('DHT Control', 100)
    ON CONFLICT (product_name) DO NOTHING;
  `;
}

export { sql };