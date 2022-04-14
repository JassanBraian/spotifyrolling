import SuperUI from './SuperUI.js';
import AlbumServices from '../utils/AlbumServices.js';
import ValidationServices from '../utils/ValidationServices.js';
import Album from '../classes/Album.js';

const albumServices = new AlbumServices();
const validationServices = new ValidationServices();
const superUI = new SuperUI();

let albumDeleteId = 0;

class UIAlbum extends SuperUI {
    addListenersAlbum() {
        document.addEventListener('click', async function (e) {
            e.preventDefault();

            if (e.target.classList.contains('btnModalAlbumSave')) {
                const objAlbum = getDataFrmAlbum();

                !objAlbum.id ? await albumServices.createAlbum(objAlbum)
                    : await albumServices.updateAlbum(objAlbum);

            } else if (e.target.classList.contains('btnCreateAlbum')) {
                document.querySelector('#frmAlbum').reset();
                const btnSave = document.querySelector('#btnModalAlbumSave');
                superUI.setDisableBtn(btnSave, true);

            } else if (e.target.classList.contains('btnEditAlbum')) {
                const objAlbum = await albumServices.getAlbumById(e.target.id);
                setDataFrmAlbum(await objAlbum);
                const btnSave = document.querySelector('#btnModalAlbumSave');
                superUI.setDisableBtn(btnSave, false);

            } else if (e.target.classList.contains('btnDeleteAlbum')) {
                albumDeleteId = e.target.id;

            } else if (e.target.classList.contains('btnModalConfirmDelete')) {
                albumServices.deleteAlbum(albumDeleteId);

            } else if (e.target.classList.contains('btnChangeDestacAlbum')) {
                const album = await albumServices.getAlbumById(e.target.id);
                await albumServices.changeDestacadoAlbum(album, !album.esDestacado);

            }
        });

        document.querySelector('#albumNombre').addEventListener('blur', function (e) {
            validateAlbumNombre(e);
        }, true);
        document.querySelector('#albumNombre').addEventListener('input', function (e) {
            validateAlbumNombre(e);
        }, true);

        document.querySelector('#albumDescrip').addEventListener('blur', function (e) {
            validateAlbumDescrip(e);
        }, true);
        document.querySelector('#albumDescrip').addEventListener('input', function (e) {
            validateAlbumDescrip(e);
        }, true);

        document.querySelector('#albumImgUrl').addEventListener('blur', function (e) {
            validateAlbumImgUrl(e);
        }, true);
        document.querySelector('#albumImgUrl').addEventListener('input', function (e) {
            validateAlbumImgUrl(e);
        }, true);

    }

    buildAlbumTable = async () => {
        const table = document.createElement('div');
        table.innerHTML = `
            <div class="d-flex justify-content-between p-2" style="background-color: #212529 ">
                <h3 style="color: white;">Listado de Albumes</h3>
                <button type="button" class="btnCreateAlbum btn btn-success" data-bs-toggle="modal"
                    data-bs-target="#albumModalCrud">
                Cargar Album
                </button>
            </div>

            <table class="table table-dark table-hover" id="tableAlbumList">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Portada</th>
                        <th scope="col">Destacado</th>
                        <th scope="col">Categoria</th>
                        <th scope="col" class="text-center">Operaciones</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        `;
        return table;
    }

    buildAlbumTBody = async () => {
        const albumesDB = await albumServices.getAlbumes();
        const albumItems = [];

        albumesDB.forEach(album => {
            const tr = document.createElement('tr');

            tr.innerHTML = `
                <td>${album.nombre}</td>
                <td>${album.descrip}</td>
                <td>${album.imgUrl}</td>
                <td>${album.esDestacado ? 'Si' : 'No'}</td>
                <td>${album.categoria}</td>
                <td class="text-center">
                    <button 
                        type="button" 
                        class="btnChangeDestacAlbum btn btn-primary"
                        id=${album.id} 
                    >${album.esDestacado ? 'Qui Dest' : 'Destacar'}
                    </button>
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
                        data-bs-toggle="modal" 
                        data-bs-target="#modalConfirmDelete"
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
                                    <label for="albumNombre" class="form-label">Nombre</label>
                                    <input type="text" class="form-control" id="albumNombre">
                                    <div class="form-text" style="display: none">Campo obligatorio</div>
                                </div>



                                <div class="mb-3">
                                    <label for="albumDescrip" class="form-label">Descripcion</label>
                                    <input type="text" class="form-control" id="albumDescrip">
                                    <div class="form-text" style="display: none">Campo obligatorio</div>
                                </div>
                                <div class="mb-3">
                                    <label for="albumImgUrl" class="form-label">Portada</label>
                                    <input type="url" class="form-control" id="albumImgUrl">
                                    <div class="form-text" style="display: none">Campo obligatorio</div>
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
                                        <option value='latino'>Latino</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button 
                                type="button" 
                                class="btn btn-secondary" 
                                data-bs-dismiss="modal"
                            >Cancel
                            </button>
                            <button 
                                type="button" 
                                class="btnModalAlbumSave btn btn-primary"
                                id="btnModalAlbumSave" 
                                disabled='true'
                            >Save changes
                            </button>
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

function validarFrmAlbumCompleto() {
    const btnSave = document.querySelector('#btnModalAlbumSave');
    if (validationServices.validarString(frmAlbum.querySelector('#albumNombre'))
        && validationServices.validarString(frmAlbum.querySelector('#albumDescrip'))
        && validationServices.validarImgUrl(frmAlbum.querySelector('#albumImgUrl'))
        && validationServices.validarSelectBoolean(frmAlbum.querySelector('#albumDestacado'))
        && validationServices.validarNoEmpty(frmAlbum.querySelector('#albumCategoria'))) {
        superUI.setDisableBtn(btnSave, false);
        return true;
    } else {
        superUI.setDisableBtn(btnSave, true);
        return false;
    }
}

function validateAlbumNombre(e) {
    const btnSave = document.querySelector('#btnModalAlbumSave');
    const errorElem = e.target.parentElement.querySelector('.form-text');
    if (validationServices.validarString(e.target)) {
        superUI.showHideElement(errorElem, false);
        superUI.addRemoveStyleInputValidat(e.target, true);
        validarFrmAlbumCompleto();
    } else {
        superUI.showHideElement(errorElem, true);
        superUI.addRemoveStyleInputValidat(e.target, false);
        superUI.setDisableBtn(btnSave, true);
    }
}

function validateAlbumDescrip(e) {
    const btnSave = document.querySelector('#btnModalAlbumSave');
    const errorElem = e.target.parentElement.querySelector('.form-text');
    if (validationServices.validarString(e.target)) {
        superUI.showHideElement(errorElem, false);
        superUI.addRemoveStyleInputValidat(e.target, true);
        validarFrmAlbumCompleto();
    } else {
        superUI.showHideElement(errorElem, true);
        superUI.addRemoveStyleInputValidat(e.target, false);
        superUI.setDisableBtn(btnSave, true);
    }
}

function validateAlbumImgUrl(e) {
    const btnSave = document.querySelector('#btnModalAlbumSave');
    const errorElem = e.target.parentElement.querySelector('.form-text');
    if (validationServices.validarImgUrl(e.target)) {
        superUI.showHideElement(errorElem, false);
        superUI.addRemoveStyleInputValidat(e.target, true);
        validarFrmAlbumCompleto();
    } else {
        superUI.showHideElement(errorElem, true);
        superUI.addRemoveStyleInputValidat(e.target, false);
        superUI.setDisableBtn(btnSave, true);
    }
}

export default UIAlbum;