import { db } from "./database";

const setupConsumables = () => {
  db.serialize(() => {
    db.run(
      `
			CREATE TABLE IF NOT EXISTS Consumables (
				id INTEGER PRIMARY KEY AUTOINCREMENT,
				name TEXT NOT NULL,
				brand TEXT NOT NULL,
				type TEXT NOT NULL,
				price TEXT NOT NULL,
				quantity INTEGER NOT NULL
			);
			`,
      (err: Error) => {
        if (err) {
          console.error(err.message);
        }
        console.log("Consumables table created successfully.");
      }
    );

    db.run(
      `
			INSERT INTO Consumables (name, brand, price, type, quantity)
      VALUES ('Air Still Filters', 'Still Spirits', '$15.00', 'Filtering', 10);
			`,
      (err: Error) => {
        if (err) {
          console.error(err.message);
        }
        console.log("Consumables table created successfully.");
      }
    );
  });
};

const setupEquipment = () => {
  db.serialize(() => {
    db.run(
      `
			CREATE TABLE IF NOT EXISTS Equipment (
				id INTEGER PRIMARY KEY AUTOINCREMENT,
				name TEXT NOT NULL,
				brand TEXT NOT NULL,
				material TEXT NOT NULL,
				price TEXT NOT NULL,
				quantity INTEGER NOT NULL
			);
			`,
      (err: Error) => {
        if (err) {
          console.error(err.message);
        }
        console.log("Equipment table created successfully.");
      }
    );
  });
};

const setupJournalEntries = () => {
  db.serialize(() => {
    db.run(
      `
			CREATE TABLE IF NOT EXISTS JournalEntries (
				id INTEGER PRIMARY KEY AUTOINCREMENT,
				author INTEGER NOT NULL,
				date DATETIME NOT NULL,
				content TEXT NOT NULL
			);
			`,
      (err: Error) => {
        if (err) {
          console.error(err.message);
        }
        console.log("Journal Entries table created successfully.");
      }
    );
  });
};

const setupRecipes = () => {
  db.serialize(() => {
    db.run(
      `
		CREATE TABLE IF NOT EXISTS Recipes (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			name TEXT NOT NULL,
			productName TEXT NOT NULL,
			productQuantity INTEGER NOT NULL,
			productUnit TEXT NOT NULL
		);
		`,
      (err: Error) => {
        if (err) {
          console.error(err.message);
        }
        console.log("Recipes table created successfully.");
      }
    );

    db.run(
      `
		  CREATE TABLE IF NOT EXISTS RecipeIngredient (
			  id INTEGER PRIMARY KEY AUTOINCREMENT,
			  recipeId INTEGER NOT NULL,
			  consumableId INTEGER NOT NULL,
			  quantity INTEGER NOT NULL,
			  unit TEXT NOT NULL
		  );
		  `,
      (err: Error) => {
        if (err) {
          console.error(err.message);
        }
        console.log("Recipe Ingredients table created successfully.");
      }
    );

    db.run(
      `
		  CREATE TABLE IF NOT EXISTS RecipeStep (
			  id INTEGER PRIMARY KEY AUTOINCREMENT,
			  recipeId INTEGER NOT NULL,
			  position INTEGER NOT NULL,
			  content INTEGER NOT NULL
		  );
		  `,
      (err: Error) => {
        if (err) {
          console.error(err.message);
        }
        console.log("Recipe Steps table created successfully.");
      }
    );
  });
};

setupConsumables();
setupEquipment();
setupJournalEntries();
setupRecipes();
