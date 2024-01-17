import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import useNoticias from "../hooks/useNoticias"

const CATEGORIAS = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Negocios' },
    { value: 'entertainment', label: 'Entretenimiento' },
    { value: 'health', label: 'Salud' },
    { value: 'science', label: 'Ciencia' },
    { value: 'sports', label: 'Deportes' },
    { value: 'technology', label: 'Tecnología' },
]

function Formulario() {

    const { categoria, handleChangeCategoria } = useNoticias();

    return (
        <form>
            <FormControl fullWidth>
                <InputLabel>Categoría</InputLabel>
                <Select
                    label="Categoría"
                    onChange={handleChangeCategoria}
                    value={categoria}
                >
                    {CATEGORIAS.map(categ => (
                        <MenuItem
                            key={categ.value} value={categ.value}
                        >
                            {categ.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </form>
    )
}

export default Formulario
