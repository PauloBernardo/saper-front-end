import React, {useCallback, useEffect, useRef, useState} from 'react'
import { useTranslation } from 'react-i18next'

import { useAPI } from 'service/API'

export type TableDataInstance = {
  reload(): void;
}

type Field = {
  accessor: string
  label: string
  type: string
}

type Action = {
  label: string
  icon: JSX.Element
  action(data: any): Promise<boolean>
}

type TableDataProps = {
  url: string
  fields: Field[]
  filters: any
  actions: Action[]
  reference?: React.MutableRefObject<TableDataInstance | undefined>;
}

function TableData({ url, fields, filters, actions, reference }: TableDataProps) {
  const { t } = useTranslation()
  const [data, setData] = useState<any[]>([])
  const api = useAPI()

  const reload = useCallback(() => {
    api.get(url, filters).then((res) => {
      setData(res)
    })
  }, [url, filters])

  useEffect(() => {
    reload()
  }, [url, filters, reload])

  const instance = useRef<TableDataInstance>({ reload });

  if (reference) {
    reference.current = instance.current;
  }

  const getFieldValue = (field: Field, data: any): any => {
    switch (field.type) {
      case 'date':
        return new Date(data[field.accessor]).toLocaleDateString()
      case 'boolean':
        if (data[field.accessor]) {
          return 'Sim'
        } else {
          return 'Não'
        }
      default:
        return data[field.accessor]
    }
  }

  const doAction = (action: (data: any) => Promise<boolean>, d: any) => {
    action(d).then((res) => (res ? reload() : null))
  }

  return (
    <div className={'d-flex'}>
      <table className={'table table-bordered table-flex'}>
        <thead>
          <tr>
            {fields.map((f) => {
              return <th key={f.accessor}>{t(f.label)}</th>
            })}
            {actions.length > 0 && <th>{t('actions.title')}</th>}
          </tr>
        </thead>
        <thead>
          {data.map((d, i) => {
            return (
              <tr key={i}>
                {fields.map((f) => {
                  return <td key={f.accessor}>{getFieldValue(f, d)}</td>
                })}
                <td>
                  <div className={'d-flex flex-row'}>
                    {actions.length > 0 &&
                        actions.map((a) => {
                          return (
                              <button
                                  key={a.label}
                                  onClick={() => doAction(a.action, d)}
                                  className={'btn btn-sm'}
                              >
                                {a.icon}
                              </button>
                          )
                        })}
                  </div>
                </td>
              </tr>
            )
          })}
        </thead>
      </table>
    </div>
  )
}

export default TableData
