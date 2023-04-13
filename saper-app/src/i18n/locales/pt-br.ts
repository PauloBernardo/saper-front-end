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
      publicPage: {
        login: 'Acessar',
        backToTop: 'Voltar ao topo',
        slides: {
          first: {
            title: 'Formação em desenvolvimento WEB',
            description: 'O Saper.edu nasceu de uma parceria entre o Instituto Federal de Educação, Ciência e Tecnologia do Ceará e a empresa Philips através de incentivos da Lei de Informática.'
          },
          second: {
            title: 'Mercado de Programação',
            description: 'Quer começar bem na área de TI? Conheça o projeto Saper.edu e fique por dentro da nossa Formação em Desenvolvimento WEB. Curso gratuito, certificação garantida, aulas ao vivo e online, expertise IFCE'
          },
          third: {
            title: 'Processo Seletivo',
            description: 'Nosso curso Formação em desenvolvimento WEB tem processo seletivo e vagas limitadas, acompanhem nosso calendário. Vem para o projeto Saper.edu'
          }
        },
        professors: {
          viewDetails: 'Detalhes',
          paulo: {
            name: 'Paulo',
            description: 'Professor de Reactjs'
          },
          saulo: {
            name: 'Saulo',
            description: 'Professor de Frontend e coordenador de projetos'
          },
          thalyson: {
            name: 'Thalyson',
            description: 'Professor de Backend Spring Boot'
          }
        }
      },
      notFound: {
        title: "Página não encontrada :(",
        message: "Não encontramos a página que você está procurando, clique no link abaixo para ser redirecionado!",
        home: 'Voltar para home!'
      },
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
        latitude: 'Latitude',
        longitude: 'Longitude',
        capacity: 'Capacidade',
        created_by: 'Criado por',
        add: {
          title: 'Cadastrar Sala',
          fields: {
            name: 'Nome',
            latitude: 'Latitude',
            longitude: 'Longitude',
            capacity: 'Capacidade',
          }
        },
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
