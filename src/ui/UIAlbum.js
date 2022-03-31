import SuperUI from './SuperUI.js';
import AlbumServices from '../utils/AlbumServices.js';
import ValidationServices from '../utils/ValidationServices.js';
import Album from '../classes/Album.js';

const albumServices = new AlbumServices();
const validationServices = new ValidationServices();

class UIAlbum extends SuperUI {
    addListenersAlbum() {
        document.addEventListener('click', async function (e) {
            e.preventDefault();
            if (e.target.classList.contains('btnModalSave')) {
                const objAlbum = getDataFrmAlbum();
                let res = '';
                !objAlbum.id ?
                    res = await albumServices.createAlbum(objAlbum)
                    :
                    res = await albumServices.updateAlbum(objAlbum);

                res ? console.log('Ha sido creado/editado correctamente')
                    : console.log('Ocurrio error en create o update album');

            } else if (e.target.classList.contains('btnEditAlbum')) {
                const objAlbum = await albumServices.getAlbumById(e.target.id);
                setDataFrmAlbum(await objAlbum);

            } else if (e.target.classList.contains('btnDeleteAlbum')) {
                albumServices.deleteAlbum(e.target.id);
            }
        });

        document.querySelector('#albumNombre').addEventListener('blur', function (e) {
            console.log('asd-> ', validationServices.validarString(e.target, 1));
            (validationServices.validarString(e.target, 1)) ?
                true : console.log("Mostrar msj error con js");
        }, true);

        document.querySelector('#albumDescrip').addEventListener('blur', function (e) {
            validationServices.validarNoEmpty(e.target) && validationServices.validarString(e.target) ?
                true : console.log("Mostrar msj error con js");
        }, true);

        document.querySelector('#albumImgUrl').addEventListener('blur', function (e) {
            validationServices.validarNoEmpty(e.target) && validationServices.validarNoEmpty(e.target) ?
                true : console.log("Mostrar msj error con js");
        }, true);


        // document.querySelector('#albumDescrip').addEventLister('blur', validarInput);
        // document.querySelector('#albumImgUrl').addEventLister('blur', validarInput);
        // document.querySelector('#albumDestacado').addEventLister('blur', validarInput);
        // document.querySelector('#albumCategoria').addEventLister('blur', validarInput);



    }

    buildAlbumList = async () => {
        const albumesDB = await albumServices.getAlbumes();
        const albumItems = [];

        albumesDB.forEach(album => {
            const tr = document.createElement('tr');

            tr.innerHTML = `
                <td>${album.nombre}</td>
                <td>${album.descrip}</td>
                <td>${album.imgUrl}</td>
                <td>${album.esDestacado}</td>
                <td>${album.categoria}</td>
                <td class="text-center">
                    <button 
                        type="button" 
                        class="btnEditAlbum btn btn-warning"
                        id=${album.id} 
                        data-bs-toggle="modal" 
                        data-bs-target="#albumModalCrud"
                    >Editar
                    </button>
                    <button 
                        type="button" 
                        class="btnDeleteAlbum btn btn-danger"
                        id=${album.id} 
                        >Eliminar
                    </button>
                </td>
            `;

            albumItems.push(tr);
        });
        return albumItems;
    }

    buildAlbumModalCrud = async () => {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="modal fade" id="albumModalCrud" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Nuevo Album</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form id="frmAlbum">
                                <div class="mb-3">
                                    <input type="text" class="form-control" id="albumId" style="display: none">
                                </div>
                                <div class="mb-3">
                                    <label for="albumNombre1" class="form-label">Nombre</label>
                                    <input type="text" class="form-control" id="albumNombre">
                                    <div class="form-text" style="display: none">Campo obligatorio</div>
                                </div>
                                <div class="mb-3">
                                    <label for="albumDescrip" class="form-label">Descripcion</label>
                                    <input type="text" class="form-control" id="albumDescrip">
                                </div>
                                <div class="mb-3">
                                    <label for="albumImgUrl" class="form-label">Portada</label>
                                    <input type="url" class="form-control" id="albumImgUrl">
                                </div>
                                <div class="mb-3">
                                    <label for="albumDestacado" class="form-label">Destacado</label>
                                    <select name="selectDestacada" class="form-select" id="albumDestacado">
                                        <option value='true'>Sí</option>
                                        <option value='false'>No</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="albumCategoria" class="form-label">Categoria</label>
                                    <select name="selectCategoria" class="form-select" id="albumCategoria">
                                        <option value='pop'>Pop</option>
                                        <option value='rock'>Rock</option>
                                        <option value='destacado'>Destacado</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btnModalSave btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return div;
    }

};

function getDataFrmAlbum() {
    const frmAlbum = document.querySelector('#frmAlbum');
    const albumId = frmAlbum.querySelector('#albumId').value;

    const objAlbum = new Album(
        !albumId ? 0 : albumId,
        frmAlbum.querySelector('#albumNombre').value,
        frmAlbum.querySelector('#albumDescrip').value,
        frmAlbum.querySelector('#albumImgUrl').value,
        frmAlbum.querySelector('#albumDestacado').value,
        frmAlbum.querySelector('#albumCategoria').value
    );
    return objAlbum;
}

function setDataFrmAlbum(objAlbum) {
    const frmAlbum = document.querySelector('#frmAlbum');

    frmAlbum.querySelector('#albumId').value = objAlbum.id;
    frmAlbum.querySelector('#albumNombre').value = objAlbum.nombre;
    frmAlbum.querySelector('#albumDescrip').value = objAlbum.descrip;
    frmAlbum.querySelector('#albumImgUrl').value = objAlbum.imgUrl;
    frmAlbum.querySelector('#albumDestacado').value = objAlbum.esDestacado;
    frmAlbum.querySelector('#albumCategoria').value = objAlbum.categoria;
}

function validarInput(input) {
    let res = false;
    if (validationServices.validarNoEmpty(input)) {
        if (input.type === 'text') {
            res = validationServices.validarString(input);
        } else if (input.type === 'url') {
            res = validationServices.validarUrl(input);
        } else if (input.type === 'email') {
            res = validationServices.validarEmail(input);
        } else if (input.type === 'email') {
            res = validationServices.validarEmail(input);
        }
    }
}

export default UIAlbum;