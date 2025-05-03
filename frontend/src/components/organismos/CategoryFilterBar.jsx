import { SearchBar } from "../moleculas/SearchBar"
import { Button } from "../atomos/Button"
import { HContainer, HContent, HWraper, Recomended, Text } from '../../styles/CategoryFilterBarStyles'
import { useState } from "react"

const buttonName = ['Flat', 'Luxury', 'Camping', 'A-Frame', 'Lake Villa'];

export const CategoryFilterBar = () => {
    const [active, setActive] = useState(1)
    return (
        <HContainer>
            <HContent>
                <HWraper>
                    <SearchBar/>
                    <Recomended>
                        <Text>Recomended: </Text>
                        {buttonName.map((name, index)=> (
                            <Button
                                key={name}
                                label={name}
                                active={index === active} // Activo si el índice coincide
                                onClick={() => setActive(index)}
                            />
                        ))}
                    </Recomended>
                </HWraper>
            </HContent>
        </HContainer>
    )
}