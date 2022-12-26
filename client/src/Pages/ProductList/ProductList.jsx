import { React, useState } from 'react'
import styled from 'styled-components'
import Announcment from '../../Components/Announcment/Announcment';
import Navbar from '../../Components/Navbar/Navbar'
import Products from '../../Components/Products/Products'
import Newsletter from '../../Components/Newsletter/Newsletter'
import Footer from '../../Components/Footer/Footer'
import { useLocation } from 'react-router-dom';
const Container = styled.div`

`
const Title = styled.h1`
margin: 20px;
`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
margin: 20px;
`
const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
`
const Select = styled.select`
padding: 10px;
margin-right: 20px;
`
const Option = styled.option`

`
const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilter] = useState({});
    const [sort, setSort] = useState("newest");
    const handleFilter = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setFilter(prevfilter => {
            return {
                ...prevfilter,
                [name]: value,
            }
        });
    }
    return (
        <Container>
            <Navbar />
            <Announcment />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name='color' defaultValue={'color'} onChange={handleFilter}>
                        <Option value="color" disabled>Color</Option>
                        <Option>white</Option>
                        <Option>black</Option>
                        <Option>red</Option>
                        <Option>blue</Option>
                        <Option>yellow</Option>
                        <Option>green</Option>
                    </Select>
                    <Select name="size" defaultValue={'size'} onChange={handleFilter}>
                        <Option value="size" disabled>Size</Option>
                        <Option>small</Option>
                        <Option>medium</Option>
                        <Option>large</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select defaultValue={'Newest'} onChange={e => setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList