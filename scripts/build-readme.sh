
# output help
./bin.mjs --help > static/help.txt

# output example
./bin.mjs "*" --color > static/example.ansi
echo "**Example:**" > static/example.md
echo "<pre>" >> static/example.md
pnpm ansi-to-html static/example.ansi >> static/example.md
echo "</pre>" >> static/example.md

pnpm inject-markdown README.md
pnpm prettier -w README.md
