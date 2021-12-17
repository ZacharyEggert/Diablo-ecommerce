import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

interface CategoryProps {}

const Category: React.FC<CategoryProps> = ({}) => {
    const router = useRouter();
    const { category } = router.query;

    useEffect(() => {
        document.title = `Diablo Guitars - ${category}`;
    }, [category]);

    return <div>Category: {category}</div>;
};

export default Category;
