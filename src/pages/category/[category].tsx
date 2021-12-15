import { getCategoryFromSlug } from '@lib/categories';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';

interface CategoryProps {}

const Category: FC<CategoryProps> = ({}) => {
    const router = useRouter();
    const { category } = router.query;

    useEffect(() => {
        const cat = getCategoryFromSlug(category as string);
        if (category && cat === null) {
            router.push('/category/404');
        }
        document.title = `Diablo Guitars - ${cat?.name}`;
    }, [category]);

    return (
        <div>
            <h1>{category}</h1>
        </div>
    );
};

export default Category;
