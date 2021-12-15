import { useRouter } from 'next/router';
import { FC } from 'react';

interface CategoryProps {}

const Category: FC<CategoryProps> = ({}) => {
    const router = useRouter();
    const { product } = router.query;

    return (
        <div>
            <h1>{product}</h1>
        </div>
    );
};

export default Category;
