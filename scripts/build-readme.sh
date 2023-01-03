
# output help
./bin.mjs --help > static/help.txt

# output example
./bin.mjs "*" > static/example.txt

pnpm inject-markdown README.md
pnpm prettier -w README.md
