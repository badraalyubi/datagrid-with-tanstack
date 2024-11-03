import { flexRender, HeaderGroup } from '@tanstack/react-table';
import { Person } from '../../data/makeData';
import { IndeterminateCheckbox } from './checkbox';

type HeaderType = {
    hgroups: HeaderGroup<Person>[];
    checked: boolean;
    indeterminate: boolean;
    onChange: (event: unknown) => void;
}

export function Header(props: HeaderType) {
  const { hgroups, checked, indeterminate, onChange } = props;
  return (
    <thead>
      {hgroups.map((hg: any) => (
        <tr key={hg.id}>
          <th>
          <IndeterminateCheckbox
              {...{
                checked,
                indeterminate,
                onChange
              }}
            />{' '}
          </th>
          {hg.headers.map((header: any) => {
            return (
              <th key={header.id} colSpan={header.colSpan}>
                {header.isPlaceholder ? null : (
                  <div>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {/* {header.column.getCanFilter() ? (
                          <div>
                            <Filter column={header.column} table={table} />
                          </div>
                        ) : null} */}
                  </div>
                )}
              </th>
            );
          })}
        </tr>
      ))}
    </thead>
  );
}
