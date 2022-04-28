exports.seed = function(knex, Promise) {
    return knex('pokemon')
      .truncate()
      .then(function() {
        return knex('pokemon').insert([
          { name: 'shedinja' },
          { name: 'shuckle' },
          { name: 'kecleon' },
          { name: 'slaking' },
          { name: 'dunsparce' },
          { name: 'golisopod' },
        ]);
      });
  };