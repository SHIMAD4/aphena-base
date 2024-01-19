// eslint-disable-next-line no-undef
module.exports = {
    plugins: ['@typescript-eslint', 'import', 'prettier', 'react-hooks', 'react'],
    extends: ['plugin:prettier/recommended'],
    parser: '@typescript-eslint/parser',
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
        },
        'import/resolver': {
            node: {
                extensions: ['.mjs', '.js', '.json', '.ts', '.d.ts'],
            },
        },
        'import/core-modules': [],
        'import/ignore': [
            'node_modules',
            '\\.(coffee|scss|css|less|hbs|svg|json)$',
        ],
        'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
        'import/external-module-folders': [
            'node_modules',
            'node_modules/@types',
        ],
    },
    env: {
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            generators: false,
            objectLiteralDuplicateProperties: false,
            jsx: true,
        },
        project: 'tsconfig.json',
    },
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'prettier/prettier': 'error',
        'accessor-pairs': 'off',
        'array-callback-return': ['error', {allowImplicit: true}],
        'no-var': 'error',
        complexity: ['error', {max: 20}],
        curly: ['error', 'all'],
        'default-case': ['error', {commentPattern: '^no default$'}],
        'default-case-last': 'error',
        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': 'error',
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': ['error', {allowKeywords: true}],
        'dot-location': ['error', 'property'],
        eqeqeq: ['error', 'always', {null: 'ignore'}],
        'no-eq-null': 'off',
        'grouped-accessor-pairs': 'error',
        'no-alert': 'error',
        'no-case-declarations': 'error',
        'no-constructor-return': 'error',
        'no-else-return': ['error', {allowElseIf: false}],
        'no-empty-pattern': 'error',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': [
            'error',
            {
                allow: ['arrowFunctions', 'functions', 'methods'],
            },
        ],
        'no-eval': 'error',
        'no-implied-eval': 'off',
        'no-new-func': 'off',
        '@typescript-eslint/no-implied-eval': 'error',
        'no-loss-of-precision': 'off',
        '@typescript-eslint/no-loss-of-precision': 'error',
        'no-script-url': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-native-reassign': 'off',
        'no-global-assign': ['error', {exceptions: []}],
        'no-implicit-globals': 'off',
        'no-implicit-coercion': [
            'off',
            {
                boolean: false,
                number: true,
                string: true,
                allow: [],
            },
        ],
        'no-invalid-this': 'off',
        'no-iterator': 'error',
        'no-labels': ['error', {allowLoop: false, allowSwitch: false}],
        'no-lone-blocks': 'error',
        'no-loop-func': 'off',
        '@typescript-eslint/no-loop-func': 'off',
        'no-magic-numbers': 'off',
        '@typescript-eslint/no-magic-numbers': [
            'off',
            {
                ignore: [],
                ignoreArrayIndexes: true,
                enforceConst: true,
                detectObjects: false,
            },
        ],
        'no-multi-spaces': [
            'error',
            {
                ignoreEOLComments: false,
            },
        ],
        'no-multi-str': 'error',
        'no-new': 'error',
        'no-new-wrappers': 'error',
        'no-nonoctal-decimal-escape': 'error',
        'no-octal-escape': 'error',
        'no-octal': 'error',
        'no-proto': 'error',
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': 'error',
        'no-restricted-properties': [
            'error',
            {
                object: 'arguments',
                property: 'callee',
                message: 'arguments.callee is deprecated',
            },
            {
                object: 'global',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead',
            },
            {
                object: 'self',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead',
            },
            {
                object: 'window',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead',
            },
            {
                object: 'global',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead',
            },
            {
                object: 'self',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead',
            },
            {
                object: 'window',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead',
            },
            {
                property: '__defineGetter__',
                message: 'Please use Object.defineProperty instead.',
            },
            {
                property: '__defineSetter__',
                message: 'Please use Object.defineProperty instead.',
            },
            {
                object: 'Math',
                property: 'pow',
                message: 'Use the exponentiation operator (**) instead.',
            },
        ],
        'no-return-assign': ['error', 'always'],
        'no-return-await': 'off',
        '@typescript-eslint/return-await': 'error',
        'no-self-assign': [
            'error',
            {
                props: true,
            },
        ],
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'off',
        '@typescript-eslint/no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'off',
        'require-await': 'off',
        'require-unicode-regexp': 'off',
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': [
            'error',
            {
                allowShortCircuit: false,
                allowTernary: false,
                allowTaggedTemplates: false,
            },
        ],
        'no-unused-labels': 'error',
        'no-useless-call': 'off',
        'no-useless-catch': 'error',
        'no-useless-concat': 'error',
        'no-useless-return': 'error',
        'no-void': 'error',
        'no-warning-comments': [
            'off',
            {terms: ['todo', 'fixme', 'xxx'], location: 'start'},
        ],
        'no-with': 'error',
        'prefer-promise-reject-errors': ['error', {allowEmptyReject: true}],
        'prefer-named-capture-group': 'off',
        'prefer-object-has-own': 'off',
        'prefer-regex-literals': [
            'error',
            {
                disallowRedundantWrapping: true,
            },
        ],
        radix: ['error', 'as-needed'],
        'wrap-iife': ['error', 'outside', {functionPrototypeMethods: false}],
        yoda: 'error',
        'for-direction': 'error',
        'getter-return': ['error', {allowImplicit: true}],
        'no-async-promise-executor': 'error',
        'no-await-in-loop': 'warn',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': ['error', 'always'],
        'no-console': ['error', {allow: ['warn', 'error', 'debug']}],
        'no-constant-binary-expression': 'off',
        'no-constant-condition': 'warn',
        'no-debugger': 'error',
        'no-control-regex': 'error',
        'no-dupe-args': 'error',
        'no-dupe-else-if': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty': 'error',
        'no-empty-character-class': 'error',
        'no-ex-assign': 'error',
        'no-useless-backreference': 'error',
        'no-misleading-character-class': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-parens': 'off',
        '@typescript-eslint/no-extra-parens': [
            'off',
            'all',
            {
                conditionalAssign: true,
                nestedBinaryExpressions: false,
                returnAssign: false,
                ignoreJSX: 'all', // delegate to eslint-plugin-react
                enforceForArrowConditionals: false,
            },
        ],
        'no-extra-semi': 'off',
        '@typescript-eslint/no-extra-semi': 'error',
        'no-func-assign': 'error',
        'no-import-assign': 'error',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-obj-calls': 'error',
        'no-promise-executor-return': 'error',
        'no-prototype-builtins': 'off',
        'no-regex-spaces': 'error',
        'no-setter-return': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'no-unreachable-loop': [
            'error',
            {
                ignore: [], // WhileStatement, DoWhileStatement, ForStatement, ForInStatement, ForOfStatement
            },
        ],
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'no-negated-in-lhs': 'off',
        'require-atomic-updates': 'off',
        'no-unsafe-optional-chaining': [
            'error',
            {disallowArithmeticOperators: true},
        ],
        'no-unused-private-class-members': 'off',
        'use-isnan': 'error',
        'valid-typeof': ['error', {requireStringLiterals: true}],

        'array-bracket-newline': ['off', 'consistent'],
        'array-element-newline': ['off', {multiline: true, minItems: 3}],
        'array-bracket-spacing': ['error', 'never'],
        'block-spacing': ['error', 'always'],
        '@typescript-eslint/brace-style': [
            'error',
            '1tbs',
            {allowSingleLine: false},
        ],
        camelcase: 'off',
        '@typescript-eslint/naming-convention': [
            'error',
            // Allow camelCase variables (23.2), PascalCase variables (23.8), and UPPER_CASE variables (23.10)
            {
                selector: 'variable',
                format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            },
            // Allow camelCase functions (23.2), and PascalCase functions (23.8)
            {
                selector: 'function',
                format: ['camelCase', 'PascalCase'],
            },
            // Airbnb recommends PascalCase for classes (23.3), and although Airbnb does not make TypeScript recommendations, we are assuming this rule would similarly apply to anything "type like", including interfaces, type aliases, and enums
            {
                selector: 'typeLike',
                format: ['PascalCase'],
            },
        ],
        'capitalized-comments': ['off'],
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': 'off',
        '@typescript-eslint/comma-spacing': [
            'error',
            {before: false, after: true},
        ],
        'comma-style': [
            'error',
            'last',
            {
                exceptions: {
                    ArrayExpression: false,
                    ArrayPattern: false,
                    ArrowFunctionExpression: false,
                    CallExpression: false,
                    FunctionDeclaration: false,
                    FunctionExpression: false,
                    ImportDeclaration: false,
                    ObjectExpression: false,
                    ObjectPattern: false,
                    VariableDeclaration: false,
                    NewExpression: false,
                },
            },
        ],
        'consistent-this': 'off',
        'computed-property-spacing': ['error', 'never'],
        'eol-last': ['error', 'always'],
        'function-call-argument-newline': ['error', 'consistent'],
        'func-call-spacing': 'off',
        '@typescript-eslint/func-call-spacing': ['error', 'never'],
        'func-name-matching': [
            'off',
            'always',
            {
                includeCommonJSModuleExports: false,
                considerPropertyDescriptor: true,
            },
        ],
        'func-names': 'warn',
        'func-style': ['error', 'declaration', {allowArrowFunctions: true}],
        'function-paren-newline': ['off', 'multiline-arguments'],
        'id-denylist': 'off',
        'id-length': 'off',
        'id-match': 'off',
        'implicit-arrow-linebreak': 'off',
        indent: 'off',
        '@typescript-eslint/indent': 'off',
        'jsx-quotes': ['error', 'prefer-double'],
        'key-spacing': ['error', {beforeColon: false, afterColon: true}],
        'keyword-spacing': 'off',
        '@typescript-eslint/keyword-spacing': [
            'error',
            {
                before: true,
                after: true,
                overrides: {
                    return: {after: true},
                    throw: {after: true},
                    case: {after: true},
                },
            },
        ],
        'line-comment-position': [
            'off',
            {
                position: 'above',
                ignorePattern: '',
                applyDefaultPatterns: true,
            },
        ],
        'linebreak-style': ['error', 'unix'],
        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': [
            'error',
            'always',
            {exceptAfterSingleLine: false},
        ],
        'lines-around-comment': 'off',
        'lines-around-directive': [
            'error',
            {
                before: 'always',
                after: 'always',
            },
        ],
        'max-depth': 'off',
        'max-len': [
            'off',
            100,
            2,
            {
                ignoreUrls: true,
                ignoreComments: false,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
        'max-lines-per-function': [
            'off',
            {
                max: 50,
                skipBlankLines: true,
                skipComments: true,
                IIFEs: true,
            },
        ],
        'max-nested-callbacks': 'off',
        'max-params': ['off', 3],
        'max-statements': ['off', 10],
        'max-statements-per-line': ['off', {max: 1}],
        'multiline-comment-style': ['off', 'starred-block'],
        'multiline-ternary': ['off', 'never'],
        'new-cap': [
            'error',
            {
                newIsCap: true,
                newIsCapExceptions: [],
                capIsNew: false,
                capIsNewExceptions: [
                    'Immutable.Map',
                    'Immutable.Set',
                    'Immutable.List',
                ],
            },
        ],
        'new-parens': 'error',
        'newline-after-var': 'off',
        'newline-before-return': 'error',
        'newline-per-chained-call': ['error', {ignoreChainWithDepth: 4}],
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'error',
        'no-bitwise': 'off',
        'no-continue': 'off',
        'no-inline-comments': 'off',
        'no-lonely-if': 'error',
        'no-mixed-operators': ['off'],
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-assign': ['warn'],
        'no-multiple-empty-lines': ['error', {max: 1, maxBOF: 0, maxEOF: 0}],
        'no-negated-condition': 'off',
        'no-nested-ternary': 'off',
        'no-new-object': 'error',
        'no-plusplus': 'off',
        'no-restricted-syntax': [
            'error',
            {
                selector: 'LabeledStatement',
                message:
                    'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            },
            {
                selector: 'WithStatement',
                message:
                    '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            },
        ],
        'no-spaced-func': 'off',
        'no-tabs': 'off',
        'no-ternary': 'off',
        'no-trailing-spaces': [
            'error',
            {
                skipBlankLines: false,
                ignoreComments: false,
            },
        ],
        'no-underscore-dangle': [
            'error',
            {
                allow: [],
                allowAfterThis: false,
                allowAfterSuper: false,
                enforceInMethodNames: true,
            },
        ],
        'no-unneeded-ternary': ['error', {defaultAssignment: false}],
        'no-whitespace-before-property': 'error',
        'nonblock-statement-body-position': 'off',
        'object-curly-spacing': 'off',
        '@typescript-eslint/object-curly-spacing': ['error', 'always'],
        'object-curly-newline': 'off',
        'object-property-newline': [
            'error',
            {
                allowAllPropertiesOnSameLine: true,
            },
        ],
        'one-var': ['error', 'never'],
        'one-var-declaration-per-line': 'off',
        'operator-assignment': ['error', 'always'],
        'operator-linebreak': 'off',
        'padded-blocks': [
            'error',
            {
                blocks: 'never',
                classes: 'never',
                switches: 'never',
            },
            {
                allowSingleLineBlocks: true,
            },
        ],
        'padding-line-between-statements': 'off',
        'prefer-object-spread': 'error',
        'quote-props': [
            'error',
            'as-needed',
            {keywords: false, unnecessary: true, numbers: false},
        ],
        quotes: 'off',
        '@typescript-eslint/quotes': ['error', 'single', {avoidEscape: true}],
        'require-jsdoc': 'off',
        semi: 'off',
        '@typescript-eslint/semi': ['error', 'always'],
        'semi-spacing': ['error', {before: false, after: true}],
        'semi-style': ['error', 'last'],
        'sort-keys': ['off', 'asc', {caseSensitive: false, natural: true}],
        'sort-vars': 'off',
        'space-before-blocks': 'off',
        '@typescript-eslint/space-before-blocks': 'error',
        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'off',
        '@typescript-eslint/space-infix-ops': 'error',
        'space-unary-ops': [
            'error',
            {
                words: true,
                nonwords: false,
                overrides: {},
            },
        ],
        'spaced-comment': [
            'error',
            'always',
            {
                line: {
                    exceptions: ['-', '+'],
                    markers: ['=', '!', '/'], // space here to support sprockets directives, slash for TS /// comments
                },
                block: {
                    exceptions: ['-', '+'],
                    markers: ['=', '!', ':', '::'], // space here to support sprockets directives and flow comment types
                    balanced: true,
                },
            },
        ],
        'switch-colon-spacing': ['error', {after: true, before: false}],
        'template-tag-spacing': ['error', 'never'],
        'unicode-bom': ['error', 'never'],
        'wrap-regex': 'off',
        'init-declarations': 'off',
        'no-catch-shadow': 'off',
        'no-delete-var': 'off',
        'no-label-var': 'error',
        '@typescript-eslint/explicit-member-accessibility': ['error', {
            'accessibility': 'explicit'
        }],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        'no-shadow-restricted-names': 'error',
        'no-undef': 'error',
        'no-undefined': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {vars: 'all', args: 'none', ignoreRestSiblings: true,},
        ],
        'no-use-before-define': 'off',
        'callback-return': 'off',
        'no-process-env': 'off',
        'no-process-exit': 'off',
        'no-restricted-modules': 'off',
        'no-sync': 'off',

        'arrow-body-style': [
            'error',
            'as-needed',
            {
                requireReturnForObjectLiteral: false,
            },
        ],
        'arrow-parens': ['error', 'always'],
        'arrow-spacing': ['error', {before: true, after: true}],
        'constructor-super': 'error',
        'generator-star-spacing': ['error', {before: false, after: true}],
        'no-class-assign': 'error',
        'no-confusing-arrow': [
            'off',
            {
                allowParens: true,
            },
        ],
        'no-const-assign': 'error',
        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': 'error',
        'no-duplicate-imports': 'off',
        'no-new-symbol': 'error',
        'no-restricted-exports': [
            'error',
            {
                restrictedNamedExports: [
                    'default', // use `export default` to provide a default export
                    'then', // this will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
                ],
            },
        ],
        'no-restricted-imports': [
            'off',
            {
                paths: [],
                patterns: [],
            },
        ],
        'no-this-before-super': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        'no-useless-rename': [
            'error',
            {
                ignoreDestructuring: false,
                ignoreImport: false,
                ignoreExport: false,
            },
        ],
        'object-shorthand': [
            'error',
            'always',
            {
                ignoreConstructors: false,
                avoidQuotes: true,
            },
        ],
        'prefer-arrow-callback': [
            'error',
            {
                allowNamedFunctions: false,
                allowUnboundThis: true,
            },
        ],
        'prefer-const': [
            'error',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: true,
            },
        ],
        'prefer-destructuring': [
            'error',
            {
                VariableDeclarator: {
                    array: false,
                    object: true,
                },
                AssignmentExpression: {
                    array: true,
                    object: false,
                },
            },
            {
                enforceForRenamedProperties: false,
            },
        ],
        'prefer-numeric-literals': 'error',
        'prefer-reflect': 'off',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'require-yield': 'error',
        'rest-spread-spacing': ['error', 'never'],
        'sort-imports': [
            'off',
            {
                ignoreCase: false,
                ignoreDeclarationSort: false,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
            },
        ],
        'symbol-description': 'error',
        'template-curly-spacing': 'error',
        'yield-star-spacing': ['error', 'after'],

        // ensure imports point to files/modules that can be resolved
        'import/no-unresolved': [
            'error',
            {commonjs: true, caseSensitive: true},
        ],

        // ensure named imports coupled with named exports
        'import/named': 'error',

        // ensure default import coupled with default export
        'import/default': 'off',
        'import/namespace': 'off',

        // Helpful warnings:

        // disallow invalid exports, e.g. multiple defaults
        'import/export': 'error',

        // do not allow a default import name to match a named export
        'import/no-named-as-default': 'error',

        // warn on accessing default export property names that are also named exports
        'import/no-named-as-default-member': 'error',

        // disallow use of jsdoc-marked-deprecated imports
        'import/no-deprecated': 'off',

        // Forbid mutable exports
        'import/no-mutable-exports': 'error',

        // Module systems:

        // disallow require()
        'import/no-commonjs': 'off',

        // disallow AMD require/define
        'import/no-amd': 'error',

        // No Node.js builtin modules
        'import/no-nodejs-modules': 'off',

        // Style guide:

        // disallow non-import statements appearing before import statements
        'import/first': 'error',

        // disallow non-import statements appearing before import statements
        // deprecated: use `import/first`
        'import/imports-first': 'off',

        // disallow duplicate imports
        'import/no-duplicates': 'error',

        // disallow namespace imports
        'import/no-namespace': 'off',

        // ensure absolute imports are above relative imports and that unassigned imports are ignored
        'import/order': [
            'error',
            {groups: [['builtin', 'external', 'internal']]},
        ],

        // Require a newline after the last import/require in a group
        'import/newline-after-import': 'error',

        // Require modules with a single export to use a default export
        'import/prefer-default-export': 'off',

        // Restrict which files can be imported in a given folder
        'import/no-restricted-paths': 'off',

        // Forbid modules to have too many dependencies
        'import/max-dependencies': ['off', {max: 10}],

        // Forbid import of modules using absolute paths
        'import/no-absolute-path': 'error',

        // Forbid require() calls with expressions
        'import/no-dynamic-require': 'error',

        // prevent importing the submodules of other modules
        'import/no-internal-modules': [
            'off',
            {
                allow: [],
            },
        ],

        // Warn if a module could be mistakenly parsed as a script by a consumer
        // leveraging Unambiguous JavaScript Grammar
        // this should not be enabled until this proposal has at least been *presented* to TC39.
        // At the moment, it's not a thing.
        'import/unambiguous': 'off',

        // Forbid Webpack loader syntax in imports
        'import/no-webpack-loader-syntax': 'error',

        // Prevent unassigned imports
        // importing for side effects is perfectly acceptable, if you need side effects.
        'import/no-unassigned-import': 'off',

        // Prevent importing the default as if it were named
        'import/no-named-default': 'error',

        // Reports if a module's default export is unnamed
        'import/no-anonymous-default-export': [
            'off',
            {
                allowArray: false,
                allowArrowFunction: false,
                allowAnonymousClass: false,
                allowAnonymousFunction: false,
                allowLiteral: false,
                allowObject: false,
            },
        ],

        // This rule enforces that all exports are declared at the bottom of the file.
        'import/exports-last': 'off',

        // Reports when named exports are not grouped together in a single export declaration
        // or when multiple assignments to CommonJS module.exports or exports object are present
        // in a single file.
        'import/group-exports': 'off',

        // forbid default exports. this is a terrible rule, do not use it.
        'import/no-default-export': 'off',

        // Prohibit named exports. this is a terrible rule, do not use it.
        'import/no-named-export': 'off',

        // Forbid a module from importing itself
        'import/no-self-import': 'error',

        // Forbid cyclical dependencies between modules
        'import/no-cycle': ['error', {maxDepth: '∞'}],

        // Ensures that there are no useless path segments
        'import/no-useless-path-segments': ['error', {commonjs: true}],

        // dynamic imports require a leading comment with a webpackChunkName
        'import/dynamic-import-chunkname': [
            'off',
            {
                importFunctions: [],
                webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
            },
        ],

        // Use this rule to prevent imports to folders in relative parent paths.
        'import/no-relative-parent-imports': 'off',

        // Reports modules without any exports, or with unused exports
        // TODO: enable once it supports CJS
        'import/no-unused-modules': [
            'off',
            {
                ignoreExports: [],
                missingExports: true,
                unusedExports: true,
            },
        ],

        // Reports the use of import declarations with CommonJS exports in any module except for the main module.
        'import/no-import-module-exports': [
            'error',
            {
                exceptions: [],
            },
        ],

        // Use this rule to prevent importing packages through relative paths.
        'import/no-relative-packages': 'error',
        // Ensure consistent use of file extension within the import path
        'import/extensions': 'off',

        // Forbid the use of extraneous packages
        // paths are treated both as absolute paths, and relative to process.cwd()
        'import/no-extraneous-dependencies': [
            'off',
            {
                devDependencies: [
                    'test/**', // tape, common npm pattern
                    'tests/**', // also common npm pattern
                    'spec/**', // mocha, rspec-like pattern
                    '**/__tests__/**', // jest pattern
                    '**/__mocks__/**', // jest pattern
                    'test.{js,jsx,ts,tsx}', // repos with a single test file
                    'test-*.{js,jsx,ts,tsx}', // repos with multiple top-level test files
                    '**/*{.,_}{test,spec}.{js,jsx,ts,tsx}', // tests where the extension or filename suffix denotes that it is a test
                    '**/jest.config.js', // jest config
                    '**/jest.setup.js', // jest setup
                    '**/vue.config.js', // vue-cli config
                    '**/webpack.config.js', // webpack config
                    '**/webpack.config.*.js', // webpack config
                    '**/rollup.config.js', // rollup config
                    '**/rollup.config.*.js', // rollup config
                    '**/gulpfile.js', // gulp config
                    '**/gulpfile.*.js', // gulp config
                    '**/Gruntfile{,.js}', // grunt config
                    '**/protractor.conf.js', // protractor config
                    '**/protractor.conf.*.js', // protractor config
                    '**/karma.conf.js', // karma config
                    '**/.eslintrc.js', // eslint config
                ],
                optionalDependencies: false,
            },
        ],
        '@typescript-eslint/prefer-readonly': 'warn',
        'react/no-unstable-nested-components': ['off'],
        'react/no-array-index-key': ['warn'],
        'react/jsx-child-element-spacing': ['off'],
        'react/jsx-closing-bracket-location': ['off', 'line-aligned'],
        'react/jsx-closing-tag-location': ['off'],
        'react/jsx-curly-newline': [
            'off',
            {
                multiline: 'consistent',
                singleline: 'consistent',
            },
        ],
        'react/jsx-curly-spacing': [
            'off',
            'never',
            {
                allowMultiline: true,
            },
        ],
        'react/jsx-equals-spacing': ['off', 'never'],
        'react/jsx-first-prop-new-line': ['off', 'multiline-multiprop'],
        'react/jsx-indent': ['off', 2],
        'react/jsx-indent-props': ['off', 2],
        'react/jsx-max-props-per-line': [
            'off',
            {
                maximum: 1,
                when: 'multiline',
            },
        ],
        'react/jsx-newline': ['off'],
        'react/jsx-one-expression-per-line': [
            'off',
            {
                allow: 'single-child',
            },
        ],
        'react/jsx-props-no-multi-spaces': ['off'],
        'react/jsx-tag-spacing': [
            'off',
            {
                closingSlash: 'never',
                beforeSelfClosing: 'always',
                afterOpening: 'never',
                beforeClosing: 'never',
            },
        ],
        'react/jsx-wrap-multilines': [
            'off',
            {
                declaration: 'parens-new-line',
                assignment: 'parens-new-line',
                return: 'parens-new-line',
                arrow: 'parens-new-line',
                condition: 'parens-new-line',
                logical: 'parens-new-line',
                prop: 'parens-new-line',
            },
        ],
        'react/jsx-space-before-closing': ['off', 'always'],
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.jsx', '.tsx'],
            },
        ],
        'react/display-name': [
            'off',
            {
                ignoreTranspilerName: false,
            },
        ],
        'react/forbid-prop-types': [
            'error',
            {
                forbid: ['any', 'array', 'object'],
                checkContextTypes: true,
                checkChildContextTypes: true,
            },
        ],
        'react/forbid-dom-props': [
            'off',
            {
                forbid: [],
            },
        ],
        'react/jsx-boolean-value': [
            'error',
            'never',
            {
                always: [],
            },
        ],
        'react/jsx-handler-names': [
            'off',
            {
                eventHandlerPrefix: 'handle',
                eventHandlerPropPrefix: 'on',
            },
        ],
        'react/jsx-key': ['off'],
        'react/jsx-no-bind': [
            'error',
            {
                ignoreRefs: true,
                allowArrowFunctions: true,
                allowFunctions: false,
                allowBind: false,
                ignoreDOMComponents: true,
            },
        ],
        'react/jsx-no-duplicate-props': [
            'error',
            {
                ignoreCase: true,
            },
        ],
        'react/jsx-no-literals': [
            'off',
            {
                noStrings: true,
            },
        ],
        'react/jsx-no-undef': ['error'],
        'react/jsx-pascal-case': [
            'error',
            {
                allowAllCaps: true,
                ignore: [],
            },
        ],
        'react/sort-prop-types': [
            'off',
            {
                ignoreCase: true,
                callbacksLast: false,
                requiredFirst: false,
                sortShapeProp: true,
            },
        ],
        'react/jsx-sort-prop-types': ['off'],
        'react/jsx-sort-props': [
            'off',
            {
                ignoreCase: true,
                callbacksLast: false,
                shorthandFirst: false,
                shorthandLast: false,
                noSortAlphabetically: false,
                reservedFirst: true,
            },
        ],
        'react/jsx-sort-default-props': [
            'off',
            {
                ignoreCase: true,
            },
        ],
        'react/jsx-uses-react': ['error'],
        'react/jsx-uses-vars': ['error'],
        'react/no-danger': ['warn'],
        'react/no-deprecated': ['error'],
        'react/no-did-mount-set-state': ['off'],
        'react/no-did-update-set-state': ['error'],
        'react/no-will-update-set-state': ['error'],
        'react/no-direct-mutation-state': ['off'],
        'react/no-is-mounted': ['error'],
        'react/no-multi-comp': ['off'],
        'react/no-set-state': ['off'],
        'react/no-string-refs': ['error'],
        'react/no-unknown-property': ['error'],
        'react/prefer-es6-class': ['error', 'always'],
        'react/prefer-stateless-function': [
            'error',
            {
                ignorePureComponents: true,
            },
        ],
        'react/prop-types': 'off',
        'react/require-render-return': ['error'],
        'react/self-closing-comp': ['error'],
        'react/sort-comp': [
            'error',
            {
                order: [
                    'static-variables',
                    'static-methods',
                    'instance-variables',
                    'lifecycle',
                    '/^handle.+$/',
                    '/^on.+$/',
                    'getters',
                    'setters',
                    '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
                    'instance-methods',
                    'everything-else',
                    'rendering',
                ],
                groups: {
                    lifecycle: [
                        'displayName',
                        'propTypes',
                        'contextTypes',
                        'childContextTypes',
                        'mixins',
                        'statics',
                        'defaultProps',
                        'constructor',
                        'getDefaultProps',
                        'getInitialState',
                        'state',
                        'getChildContext',
                        'getDerivedStateFromProps',
                        'componentWillMount',
                        'UNSAFE_componentWillMount',
                        'componentDidMount',
                        'componentWillReceiveProps',
                        'UNSAFE_componentWillReceiveProps',
                        'shouldComponentUpdate',
                        'componentWillUpdate',
                        'UNSAFE_componentWillUpdate',
                        'getSnapshotBeforeUpdate',
                        'componentDidUpdate',
                        'componentDidCatch',
                        'componentWillUnmount',
                    ],
                    rendering: ['/^render.+$/', 'render'],
                },
            },
        ],
        'react/jsx-no-target-blank': [
            'error',
            {
                enforceDynamicLinks: 'always',
                links: true,
                forms: false,
            },
        ],
        'react/jsx-no-comment-textnodes': ['error'],
        'react/no-render-return-value': ['error'],
        'react/require-optimization': [
            'off',
            {
                allowDecorators: [],
            },
        ],
        'react/no-find-dom-node': ['error'],
        'react/forbid-component-props': [
            'off',
            {
                forbid: [],
            },
        ],
        'react/forbid-elements': [
            'off',
            {
                forbid: [],
            },
        ],
        'react/no-danger-with-children': ['error'],
        'react/no-unused-prop-types': 'off',
        'react/style-prop-object': ['error'],
        'react/no-unescaped-entities': ['error'],
        'react/no-children-prop': ['error'],
        'react/forbid-foreign-prop-types': [
            'warn',
            {
                allowInPropTypes: true,
            },
        ],
        'react/void-dom-elements-no-children': ['error'],
        'react/default-props-match-prop-types': [
            'error',
            {
                allowRequiredDefaults: false,
            },
        ],
        'react/no-redundant-should-component-update': ['error'],
        'react/no-unused-state': ['error'],
        'react/boolean-prop-naming': [
            'off',
            {
                propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
                rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
                message: '',
            },
        ],
        'react/no-typos': ['error'],
        'react/jsx-curly-brace-presence': [
            'error',
            {
                props: 'never',
                children: 'never',
            },
        ],
        'react/destructuring-assignment': ['error', 'always'],
        'react/no-access-state-in-setstate': ['error'],
        'react/button-has-type': 'off',
        'react/no-this-in-sfc': ['error'],
        'react/jsx-max-depth': ['off'],
        'react/no-unsafe': ['off'],
        'react/jsx-fragments': ['error', 'syntax'],
        'react/state-in-constructor': ['error', 'always'],
        'react/static-property-placement': ['error', 'property assignment'],
        'react/prefer-read-only-props': ['off'],
        'react/jsx-no-script-url': [
            'error',
            [
                {
                    name: 'Link',
                    props: ['to'],
                },
            ],
        ],
        'react/jsx-no-useless-fragment': ['error'],
        'react/no-adjacent-inline-elements': ['off'],
        'react/jsx-no-constructed-context-values': ['error'],
        'react/no-namespace': ['error'],
        'react/prefer-exact-props': ['error'],
        'react/no-arrow-function-lifecycle': ['error'],
        'react/no-invalid-html-attribute': ['error'],
        'react/no-unused-class-component-methods': ['error'],
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                'constructor-super': 'off',
                'getter-return': 'off',
                'no-const-assign': 'off',
                'no-dupe-args': 'off',
                'no-dupe-class-members': 'off',
                'no-dupe-keys': 'off',
                'no-func-assign': 'off',
                'no-import-assign': 'off',
                'no-new-symbol': 'off',
                'no-obj-calls': 'off',
                'no-redeclare': 'off',
                'no-setter-return': 'off',
                'no-this-before-super': 'off',
                'no-undef': 'off',
                'no-unreachable': 'off',
                'no-unsafe-negation': 'off',
                'valid-typeof': 'off',
                'import/named': 'off',
                'import/no-named-as-default-member': 'off',
                'import/no-unresolved': 'off',
            },
        },
    ],
};
