import React, { useContext } from 'react'
import { EntryContext } from '../contexts/EntryContext'

export const Entries = () => {
  const { entries } = useContext(EntryContext)

  return (
    <div>
      <div className="entries box is-absolute">
        <table className="table w-100">
          <tbody>
            { entries.map(entry => {
              let elementClass = '';
              let elementText = '';
              if (entry.id % 2) {
                elementClass = 'tag is-success is-light';
                elementText = 'Completed';
              }
              else if (entry.id % 3) {
                elementClass = 'tag is-danger is-light';
                elementText = 'Rejected';
              }
              else {
                elementClass = 'tag is-warning is-light';
                elementText = 'Pending';
              }
              return (
                <tr key={ entry.id }>
                  <td>{ entry.title }</td>
                  <td className="has-text-right">
                    <span className={ elementClass }>{ elementText }</span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}