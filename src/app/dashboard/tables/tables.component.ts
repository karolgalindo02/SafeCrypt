import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Datatable, initTE } from 'tw-elements';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
})
export class TablesComponent implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit() {
    initTE({ Datatable });

    interface RespuestaDTO {
      mensaje: string;
    }

    const customDatatable = document.getElementById('datatable') as HTMLElement;
    const advancedSearchInput = document.getElementById(
      'advanced-search-input'
    ) as HTMLInputElement;

    const setActions = () => {
      document.querySelectorAll('.update-btn').forEach((btn: Element) => {
        btn.addEventListener('click', () => {
          const workTeamUpdate = {
            id: btn.getAttribute('data-id'),
            nombreEquipo: btn.getAttribute('data-nombreEquipo'),
            descripcion: btn.getAttribute('data-descripcion'),
            tipo: btn.getAttribute('data-tipo'),
          };
        

          this.http
            .put<RespuestaDTO>(
              'http://localhost:8081/workteam/update',
              workTeamUpdate
            )
            .subscribe(
              (respuesta) => {
                console.log(respuesta.mensaje);
              },
              (error) => {
                console.error('Error al actualizar el equipo:', error);
              }
            );
        });
      });
    };

    customDatatable.addEventListener('render.te.datatable', setActions);

    new Datatable(
      customDatatable,
      {
        columns: [
          { label: 'Name', field: 'name' },
          { label: 'Description', field: 'description' },
          { label: 'Type', field: 'type' },
          { label: 'Actiones', field: 'actions', sort: false },
        ],
        rows: [
          {
            name: 'Tiger Nixon',
            description: 'System Architect',
            type: 'Edinburgh',
            phone: '+48000000000',
            email: 'tiger.nixon@gmail.com',
          },
          {
            name: 'Sonya Frost',
            description: 'Software Engineer',
            type: 'Edinburgh',
            phone: '+53456123456',
            email: 'sfrost@gmail.com',
          },
          {
            name: 'Tiger Nixon',
            description: 'System Architect',
            type: 'Edinburgh',
            phone: '+48000000000',
            email: 'tiger.nixon@gmail.com',
          },
          {
            name: 'Sonya Frost',
            description: 'Software Engineer',
            type: 'Edinburgh',
            phone: '+53456123456',
            email: 'sfrost@gmail.com',
          },
          {
            name: 'Tiger Nixon',
            description: 'System Architect',
            type: 'Edinburgh',
            phone: '+48000000000',
            email: 'tiger.nixon@gmail.com',
          },
          {
            name: 'Sonya Frost',
            description: 'Software Engineer',
            type: 'Edinburgh',
            phone: '+53456123456',
            email: 'sfrost@gmail.com',
          },
        ].map((row) => {
          return {
            ...row,
            actions: `
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="dark"
                  data-te-number=${row.phone}
                  class="update-btn inline-block rounded-full border border-purple-600 p-1.5 mr-1 uppercase leading-normal shadow-[0_4px_9px_-4px_##9333ea] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                  <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9333ea" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                </button>
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="dark"
                  data-te-number=${row.phone}
                  class="delete-btn inline-block rounded-full border border-purple-600 p-1.5 mr-1 uppercase leading-normal shadow-[0_4px_9px_-4px_##9333ea] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9333ea" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </button>
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  data-te-email=${row.email}
                  class="message-btn inline-block rounded-full border bg-purple-600 p-1.5 uppercase leading-normal shadow-[0_4px_9px_-4px_##9333ea] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#ffffff" d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z"/></svg>
                </button>`,
          };
        }),
      },
      { hover: true }
    );
  }
}
