export default function About() {
    return (
      <main classNameName="flex-shrink-0">
        <app-root _nghost-ljl-c4="" ng-version="12.1.5"><router-outlet _ngcontent-ljl-c4=""></router-outlet><app-validate
          _nghost-ljl-c9="" className="ng-star-inserted">
          <div _ngcontent-ljl-c9="" role="banner" className="bar-unam container-fluid toolbar ng-star-inserted">
            <div _ngcontent-ljl-c9="" className="container">
              <div _ngcontent-ljl-c9="" className="row">
                <div _ngcontent-ljl-c9="" className="col-6"><img _ngcontent-ljl-c9="" alt=""
                  data-savepage-currentsrc="https://www.formaciondocente.unam.mx/constancias/assets/images/logo-light.png"
                  data-savepage-src="assets/images/logo-light.png"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVQAAABsCAYAAAA1zErBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2NjQxOUM0NzIyMjA2ODExODIyQUVFM0JBRjA3NzFCNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDcyQjM0NUMwNjAxMUU0OEM5QUE2MUM2NEMwN0E5NiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2MDcyQjM0NEMwNjAxMUU0OEM5QUE2MUM2NEMwN0E5NiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzM2QkNFMTYyOTIwNjgxMTgyMkFFRTNCQUYwNzcxQjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjY0MTlDNDcyMjIwNjgxMTgyMkFFRTNCQUYwNzcxQjYiLz4gPC9yZGY6RGVzY3Jp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"
                  height="63" /></div>
                <div _ngcontent-ljl-c9="" className="col-6 text-end"></div>
              </div>
            </div>
          </div>
          <div _ngcontent-ljl-c9="" role="main" className="content">
            <div _ngcontent-ljl-c9="" className="container ng-star-inserted">
              <div _ngcontent-ljl-c9="" className="ng-star-inserted">
                <div _ngcontent-ljl-c9="" className="row justify-content-center ng-star-inserted">
                  <div _ngcontent-ljl-c9="" className="col-12 col-md-6 text-center">
                    <h1 _ngcontent-ljl-c9="">Validación de constancia</h1>
                  </div>
                </div>
                <div _ngcontent-ljl-c9="" className="row justify-content-center ng-star-inserted">
                  <div _ngcontent-ljl-c9="" className="col-12 col-md-6 text-center">
                    <table _ngcontent-ljl-c9="">
                      <tr _ngcontent-ljl-c9="">
                        <th _ngcontent-ljl-c9="">Folio: </th>
                        <td _ngcontent-ljl-c9="">SDEI/CPYPE/CONS/97080/2023</td>
                      </tr>
                      <tr _ngcontent-ljl-c9="">
                        <th _ngcontent-ljl-c9="">Curso: </th>
                        <td _ngcontent-ljl-c9="">DISEÑO E IMPLEMENTACION DE PROYECTOS INTERDISCIPLINARIOS EN LA NEM</td>
                      </tr>
                      <tr _ngcontent-ljl-c9="">
                        <th _ngcontent-ljl-c9="">Nombre: </th>
                        <td _ngcontent-ljl-c9="">Daniela Gonzalez Martinez</td>
                      </tr>
                      <tr _ngcontent-ljl-c9="">
                        <th _ngcontent-ljl-c9="">Fecha emisión: </th>
                        <td _ngcontent-ljl-c9="">Diciembre del 2023</td>
                      </tr>
                      <tr _ngcontent-ljl-c9="">
                        <th _ngcontent-ljl-c9="">Periodo: </th>
                        <td _ngcontent-ljl-c9="">Noviembre - diciembre del 2023</td>
                      </tr>
                      <tr _ngcontent-ljl-c9="">
                        <th _ngcontent-ljl-c9="">Horas: </th>
                        <td _ngcontent-ljl-c9="">1 horas</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <footer _ngcontent-ljl-c9=""></footer>
          </div><ngx-spinner _ngcontent-ljl-c9="" _nghost-ljl-c5=""
            className="ng-tns-c5-0 ng-star-inserted"></ngx-spinner>
        </app-validate></app-root>
      </main>
    );
  }
  