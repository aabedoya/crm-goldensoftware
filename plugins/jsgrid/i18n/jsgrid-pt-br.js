(function(jsGrid) {

    jsGrid.locales["pt-br"] = {
        grid: {
            noDataContent: "No encontrado",
            deleteConfirm: "Está seguro que desea eliminar este item?",
            pagerFormat: "Páginas: {first} {prev} {pages} {next} {last} &nbsp;&nbsp; {pageIndex} de {pageCount}",
            pagePrevText: "Anterior",
            pageNextText: "Siguiente",
            pageFirstText: "Primera",
            pageLastText: "Última",
            loadMessage: "Por favor, espere...",
            invalidMessage: "Datos inválidos!"
        },

        loadIndicator: {
            message: "Cargando..."
        },

        fields: {
            control: {
                searchModeButtonTooltip: "Cambiar a la búsqueda",
                insertModeButtonTooltip: "Cambiar a insertar",
                editButtonTooltip: "Editar",
                deleteButtonTooltip: "Remover",
                searchButtonTooltip: "Buscar",
                clearFilterButtonTooltip: "Remover filtro",
                insertButtonTooltip: "Adicionar",
                updateButtonTooltip: "Atualizar",
                cancelEditButtonTooltip: "Cancelar Edición"
            }
        },

        validators: {
            required: { message: "Campo obligatorio" },
            rangeLength: { message: "El valor está fuera del rango definido." },
            minLength: { message: "La longitud del valor es demasiado corta" },
            maxLength: { message: "La longitud del valor es demasiado larga" },
            pattern: { message: "El valor ingresado no es compatible con el modelo." },
            range: { message: "El valor ingresado está fuera del límite definido" },
            min: { message: "El valor es demasiado corto" },
            max: { message: "El valor es demasiado largo" }
        }
    };

}(jsGrid, jQuery));
