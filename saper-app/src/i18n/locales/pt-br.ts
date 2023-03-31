export default {
  translations: {
    layout: {
      brand: 'SAPER',
      close: 'Sair',
      sidebar: {
        home: 'Home',
        dashboard: 'Dashboard',
        profile: 'Perfil',
        client: 'Clientes',
        student: 'Estudantes',
        professor: 'Professores',
        box: 'Salas',
        team: 'Times',
        logout: 'Sair'
      }
    },
    auth: {
      banner: {
        title: 'Sistema de Ensino',
      },
      login: {
        title: 'Sistema de Ensino',
        email: 'Email',
        password: 'Senha',
        enter: 'Entrar',
        'save-password': 'Lembrar senha',
      },
    },
    actions: {
      title: 'Ações',
      add: 'Criar',
      back: 'Voltar',
      cancel: 'Cancelar',
      save: 'Salvar',
      delete: 'Excluir',
      edit: 'Editar',
    },
    dialogs: {
      remove: {
        title: 'Excluir',
        message: 'Deseja realmente excluir o item selecionado?',
      },
    },
    pages: {
      clients: {
        id: '#',
        title: 'Clientes',
        name: 'Nome',
        email: 'Email',
        'register-number': 'Matricula',
        role: 'Cargo',
        password: 'Senha',
        'password-confirm': 'Confirmar senha',
        error: {
          'password-equal': 'Senha digitadas não são identicas',
        },
      },
      student: {
        title: 'Estudantes',
        id: '#',
        registration: 'Matricula',
        name: 'Nome',
        login: 'Login',
        paid: 'Pagou?',
        add: {
          title: 'Cadastrar Estudante',
          fields: {
            name: 'Nome',
            login: 'Login',
            password: 'Senha',
            paid: 'Pago',
            repeat_password: 'Repetir senha'
          }
        },
        edit: {
          title: 'Editar Estudante'
        }
      },
      professor: {
        title: 'Professores',
        id: '#',
        registration: 'Matricula',
      },
      box: {
        id: '#',
        title: 'Salas',
        name: 'Nome',
        capacity: 'Capacidade',
        created_by: 'Criado por',
      },
      team: {
        id: '#',
        title: 'Times',
        name: 'Nome',
        professor: 'Professor',
        schedule: 'Cronograma',
        box: 'Sala',
      },
      profile: {
        ROLE_PROFESSOR: 'Professor',
        ROLE_ADMIN: 'Administrador',
        ROLE_USER: 'Estudante'
      }
    },
  },
}
