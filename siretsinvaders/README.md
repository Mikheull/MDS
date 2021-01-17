# siretsinvaders
 BigData Sirets | 🏫 MyDigitalSchool Paris 

# Configuration

There is two configuration :

- `./.env` file
Create a .env file in root directory and write the configuration below.
```
NOSQL_URL=mongodb://localhost:27017/siretsinvaders
NOSQL_TABLE=siretsinvaders
```

- `./config.js` file
```json
worker : {
    name                  : 'sirets-invader',
    watch                 : false,
    script                : './scripts/workers-pse.js',
    instances             : 4,
    exec_mode             : 'cluster',
    max_memory_restart    : '1G'
},

path : {
    import_file           : './data/dataset.csv',
    history_file          : './data/sirets/history.json',
    import_output_dir     : './data/sirets/',
    logs_dir              : './logs/',
    execution_dir         : './execution/',
},

split : {
    lineLimit             : 280000
},

workers : {
    core                : 6,
    bulk_limit          : 1000
},

delay : {
    between_workers     : 2000,
    between_check_end   : 2000
}
```

# Installation
Use `git clone` to install this app.

```
git clone https://github.com/Mikheull/siretsinvaders.git
npm install
```

# Start
```
# Import and split files
npm run import

# Launch workers with pm2
npm run start
```

# Measure metrics
- Import files is writed on file `execution/import.log` **~ 50s**
- Import datas is writed on file `execution/import.log` **~ 190s** (or check script console)