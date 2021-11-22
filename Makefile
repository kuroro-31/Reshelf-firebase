init:
	npm cache clear --force
	npm cache clean --force
	npm i
i:
	npm install
update:
	npm install -g npm
dev:
	npm run dev
build:
	npm run build
start:
	npm run start
generate:
	npm run generate
reset:
	rm -rf node_modules
	rm package-lock.json
	npm cache clear --force
	npm cache clean --force
	npm i
lint:
	npm run lintfix
package:
	npm install --save-exact @nuxtjs/auth
eslint:
	npm i eslint babel-eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue eslint-loader prettier -D
cache:
	rm -rf node_modules/.cache/hard-source/
ana:
	npx nuxt build --a
git-clean:
	git checkout .
	git clean -df
git-cache:
	git rm -r --cached .
