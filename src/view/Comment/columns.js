
const columns = (Vue) => {
  return [
    {
      title: '昵称',
      key: 'nickname',
      align: 'center',
      render(h, { row }) {
        return h('span', row.user.nickname)
      }
    },
    {
      title: '邮箱',
      key: 'email',
      align: 'center',
      render(h, { row }) {
        return h('span', row.user.email)
      }
    },

    {
      title: '评论内容',
      key: 'content',
      align: 'center',
    },
    {
      title: '更新时间',
      key: 'updated_at',
      align: 'center'
    },
    {
      title: '操作',
      align: 'center',
      render(h, {row}) {
        return h('span', [
          h('Button', {
            props: {
              type: 'primary',
              size: 'small'
            },
            style: {
              marginRight: '10px'
            },
            on: {
              click: () => (Vue.replay(row))
            }
          }, '回复'),

          h('Poptip', {
            props: {
              confirm: true,
              title: '确定删除这条评论吗？'
            },
            on: {
              'on-ok': () => (Vue.delete(row))
            }
          }, [
            h('Button', {
              props: {
                type: 'error',
                size: 'small'
              },
              style: {
                marginRight: '10px'
              },
            }, '删除')
          ])
        ])
      }
    },
  ]
}

export default columns
