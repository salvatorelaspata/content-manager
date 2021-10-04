module.exports = plop => {
    plop.setGenerator('component', {
        description: 'Create a reusable component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your component name?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
                templateFile:
                    'plop-templates/Component/Component.tsx.hbs',
            },
            // {
            //     type: 'add',
            //     path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.ts',
            //     templateFile:
            //         'plop-templates/Component/Component.test.ts.hbs',
            // },
            {
                type: 'add',
                path:
                    'src/components/{{pascalCase name}}/{{pascalCase name}}.module.css',
                templateFile:
                    'plop-templates/Component/Component.module.css.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/index.ts',
                templateFile: 'plop-templates/Component/index.ts.hbs',
            },
            {
                type: 'add',
                path: 'src/components/index.ts',
                templateFile: 'plop-templates/injectable-index.ts.hbs',
                skipIfExists: true,
            },
            {
                type: 'append',
                path: 'src/components/index.ts',
                pattern: `/* PLOP_INJECT_IMPORT */`,
                template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
            },
            {
                type: 'append',
                path: 'src/components/index.ts',
                pattern: `/* PLOP_INJECT_EXPORT */`,
                template: `{{pascalCase name}},`,
            },
        ],
    })

    plop.setGenerator('page', {
        description: 'Create a page',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your page name?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.tsx',
                templateFile:
                    'plop-templates/Component/Component.tsx.hbs',
            },
            // {
            //     type: 'add',
            //     path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.test.ts',
            //     templateFile:
            //         'plop-templates/Component/Component.test.ts.hbs',
            // },
            {
                type: 'add',
                path:
                    'src/pages/{{pascalCase name}}/{{pascalCase name}}.module.css',
                templateFile:
                    'plop-templates/Component/Component.module.css.hbs',
            },
            {
                type: 'add',
                path: 'src/pages/{{pascalCase name}}/index.ts',
                templateFile: 'plop-templates/Component/index.ts.hbs',
            },
            {
                type: 'add',
                path: 'src/pages/index.ts',
                templateFile: 'plop-templates/injectable-index.ts.hbs',
                skipIfExists: true,
            },
            {
                type: 'append',
                path: 'src/pages/index.ts',
                pattern: `/* PLOP_INJECT_IMPORT */`,
                template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
            },
            {
                type: 'append',
                path: 'src/pages/index.ts',
                pattern: `/* PLOP_INJECT_EXPORT */`,
                template: `{{pascalCase name}},`,
            },
        ],
    })

    plop.setGenerator('service', {
        description: 'Create service',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your service name?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/services/{{camelCase name}}.ts',
                templateFile: 'plop-templates/service.ts.hbs',
            },
            {
                type: 'add',
                path: 'src/services/index.ts',
                templateFile: 'plop-templates/injectable-index.ts.hbs',
                skipIfExists: true,
            },
            {
                type: 'append',
                path: 'src/services/index.ts',
                pattern: `/* PLOP_INJECT_IMPORT */`,
                template: `import {{camelCase name}} from './{{camelCase name}}';`,
            },
            {
                type: 'append',
                path: 'src/services/index.ts',
                pattern: `/* PLOP_INJECT_EXPORT */`,
                template: `{{camelCase name}},`,
            }
        ],
    })

    plop.setGenerator('hook', {
        description: 'Create a custom react hook',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your hook name?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/hooks/{{camelCase name}}.ts',
                templateFile: 'plop-templates/hook.ts.hbs',
            },
            {
                type: 'add',
                path: 'src/hooks/index.ts',
                templateFile: 'plop-templates/injectable-index.ts.hbs',
                skipIfExists: true,
            },
            {
                type: 'append',
                path: 'src/hooks/index.ts',
                pattern: `/* PLOP_INJECT_IMPORT */`,
                template: `import {{camelCase name}} from './{{camelCase name}}';`,
            },
            {
                type: 'append',
                path: 'src/hooks/index.ts',
                pattern: `/* PLOP_INJECT_EXPORT */`,
                template: `{{camelCase name}},`,
            }
        ],
    })
}