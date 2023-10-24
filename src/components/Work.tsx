import React from 'react';
import CardWork from './cards/CardWork';
import { works } from '@/common/works';

const Work = () => {
    return (
        <section className="flex items-center justify-center bg-lightPrimary dark:bg-darkSecondary" id="work">
            <div className="flex flex-col gap-12 max-w-7xl w-5/6 pt-20 pb-20">
                <div className="flex flex-col gap-3">
                    <h2 className="title"><span className="text-info">{'<'}</span>Work <span className="text-info">{'/>'}</span></h2>

                    <div className='grid mt-10 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center'>
                        {
                            works &&
                                works.length > 0
                                ?
                                works.map((work, index) => (
                                    <CardWork work={work} key={index} />
                                ))
                                :
                                <p>Not found</p>
                        }
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Work