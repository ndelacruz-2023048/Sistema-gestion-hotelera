import { SearchBar } from "../moleculas/SearchBar"
import { Button } from "../atomos/Button"
import { HContainer, HContent, HWraper, Recomended, Text } from '../../styles/CategoryFilterBarStyles'

const buttonName = ['Flat', 'Luxury', 'Camping', 'A-Frame', 'Lake Villa'];

export const CategoryFilterBar = () => {
    return (
        <HContainer>
            <HContent>
                <HWraper>
                    <SearchBar/>
                    <Recomended>
                        <Text>Recomended: </Text>
                        {buttonName.map((name)=> (

                            <Button
                                key={name}
                                label={name}
                                active={name === 'Luxury'}
                            />
                        ))}
                    </Recomended>
                </HWraper>
            </HContent>
        </HContainer>
    )
}