# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})

{user && (
        <RequestLeaderModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          userId={user.id}
        />
      )}

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState<GetUserInfoResponse | null>(null);
  const { getInfoToken } = useLoginService();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  useEffect(() => {
    const fetch = async () => {
      const user = await getInfoToken();
      setUser(user);
    };

    fetch();
  }, []);

{user?.role !== 'LEADER' && user?.role !== 'ADMIN' && (
            <div className="flex flex-col items-center justify-center flex-grow px-4 py-8">
              <h1 className="text-2xl mb-8 text-center text-white font-semibold">
                O que você gostaria de fazer?
              </h1>
              <div className="flex flex-col gap-6">
                <Card className="w-full mx-auto p-6 bg-[#242323] hover:bg-[#1a1919] cursor-pointer text-white">
                  <h2 className="text-xl font-semibold mb-4">Sou membro</h2>
                  <span>
                    Entrar em um departamento da igreja e me tornar participante.
                  </span>
                </Card>
                <Card
                  onClick={handleOpenModal}
                  className="w-full mx-auto p-6 bg-[#242323] hover:bg-[#1a1919] cursor-pointer text-white"
                >
                <h2 className="text-xl font-semibold mb-4">Sou líder</h2>
                <span>Lidere e organize escalas dos seus departamentos.</span>
              </Card>

              <Card className="w-full mx-auto p-6 bg-[#242323] hover:bg-[#1a1919] cursor-pointer text-white">
                <h2 className="text-xl font-semibold mb-4">Visitante</h2>
                <span>Quero apenas conhecer um pouco mais da igreja.</span>
              </Card>
            </div>
          </div>
          )}
```
