import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
    const cartArray=useSelector(state=>state.cartReducer)

    console.log(cartArray);
    return (
        <>
            <div className='flex justify-center'>
                <div>
                    <h1 className='text-4xl mt-10'>Cart</h1>

                    {/* <div className='flex shadow mt-3 p-6'>
                        <img width={'100px'} src="https://www.bing.com/th?id=OIP.8REXGT1HGlUTXd1N_u5ZGAHaIO&w=146&h=162&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" />
                        <div className='p-3'>
                            <h2>Paruppu vada</h2>
                            <p>15$</p>
                        </div>
                        <div className='flex p-4'>
                            <button className='p-2 btn'>-</button>
                            <button className='btn border p-3'>1</button>
                            <button className='p-2 btn'>+</button>
                        </div>
                    </div> */}

                    { 
                    cartArray.length>0?
                    cartArray.map(item=>(
                        
                    ))
                    <div className='flex shadow mt-3 p-6'>
                        <img width={'100px'} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQVFBcVFRUYGBcZFxoeGRoZGRkaIh0ZGRoaGRkaGh0dIywjIB0pHhcZJDYkKS0vMzMzGSI4PjgyPSwyMy8BCwsLDw4PHhISHjIqIioyMjIvNDIyOjI0MjI0MjIyNDIyMjoyMjIyMjQyMjIyMjI0LzIyMjIyMjIyMjIyMjIyMv/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAIHAf/EAEoQAAECAwYDBQUECAIHCQAAAAECEQADIQQFEjFBUSJhcQYTMoGRobHB0fAUQlJyByMzYoKSsuGi8RUWF1NUs9IkNDVjg5PCw+L/xAAaAQADAQEBAQAAAAAAAAAAAAACAwQBBQAG/8QAMhEAAgEDAwIEBAUEAwAAAAAAAQIAAxEhBBIxIkETUWFxFDKBkQUzsdHwFaHB8UJDUv/aAAwDAQACEQMRAD8Av0xKgtSGLKqPjGkiUopVLIqk8PwMFW6eQAsDwmvQ5xHNtRStKqMrhPnlHHnVBYjA/wBiDiUopC24k5/GJp1nIUlYyVRXwMeqnqSsp+6oOOuojWXNLqlqPNPQ/KPTern+Wm0uysooLYFZddREX2MuUvxJLpPujEFaklBPGg0PuMazStSQoA4k0UN94wie6r8wgyMSQr7w8QHtjwSUpOJ6Koa+2BpZUk4wDhPi+cbfZyCzOhWXInSPT1j5yU2WWk4VZGqTGBCFcJ8afCeURps6iO7Vp4Fe7zjDZVkjILT7YGex3MwTUh1JHEKKEVHt9JmTBLmS3weEgaHcnaLkbKSSpNFZKTEFosKShTnhUOIbHeNBtmMpOquG/n88pzqzygE7k5mNUmGyLqwpmrUXQlWFBB8WpPkCB1eEk1wSQCzwYcFts76VkY2WTIUpJdJIO4LRFfV4TpiUy1KKsOT7mgiVBLczC23WkJW/4XfqBT3wdhebUVeSJqbKAlKAfzGDbHfEySyUTXSDkov6bRVbTb1qcOwgezgqUBXOGgWzI6j036CLzs9ydp5c1kKUEzNjr0MPVJeOP2my/qwRRQAhrcXa+dIZE39agb+IDkdfOKKdfs05Oq/CypvT+06WVYeERk2WCMRGkCXbeUq0jHLW+4yIOxEM1qDNFIIPE5DKVNiMwSQg4XiWWnnG+JtKRgnJOkemTxaQYHmSAMonM0HIR4CDyghPQQofSNVyXGcGFBERKmx6egn2frGQR3hjI9PR/MsqCCDkYCTZEFKkK0yfbQxULZ+kWWmktJVzJYQnn/pFmPwoQ/mY4Qa/AM6iUKtsmdHVKSpFQyk5HmIxYBSlQAChX5iOWTO29qqpsIOyfnG8/tZbZaUKmcKVh0EhNRuwPPWPXbyjPhm7mdTnzAMKwK0CgBoY0mTglQUBwqLK66GOYSf0gTg2IJVvRotNx9vrLMZE39WrmHSfM5QSAsbHEW9BkF7XloWvCsJbhU7ddRGspbEy1ChDpPw8oHtl5SVICkqBTiSxBqlRLAts5D9YhvS+ZMtAKlYVA0DVcZhoxlIxARGewAN4UhSjiQfEk0PI5GNTNUpBNBMS/qPgYrF4dtUkjuUEqAqVZN0iv229J0wlSlqD6JJA9BAhSZbS0FR8tidDmWvhExKhoSHGWoit9rbbMWpFms5OKdQkZMczyYOTyEVRLjMltnMXPsZdZT/2mZTEk4BrhJqo7ZU5PBbM3JjqmnTTrvJuewhl72NEuzpkpLhKWG5O5O5zijoSWIOY90XG9pyFKLbmvKEN7SgiYMIoUgvu4c+2IvFJq37TdMdlr88mLcDBzFMts9zMr974/wBob39eBDSwWL8UVxSnxdfjHUQXzLdRWHAkSzDC5UOuFazDS6LQE5wxhiR0GBqZlntKXDQtVY8y8FJtAUKGCbusap8xMtGajnoAM1HkIVe06blQLniQXZZJ6HmyCQUFiXABOeFj4i2kXW4u2UuaME5kTf8ACo8tjyiO/u7s0qWhCQUpUxP8PEr8zkHyjntqsKykzJZxJzI1S/vHOPU9QQxHacitTp6jkW8j3nUZt9y+8wqmAfW8NJMxCg6SFDkXjjFitS2ZdRzzgyRa5ks45MxQ5A08xFY1BvkRFT8KG26nPrOwoljOMWdo5zd/b+ak4Z0sKH4k0PoYstj7YWOZmsoOyw3thwqKe85z6Oqna/tLDjOkaqHKBpF5SV+GYg/xCCRNT+Ieogwwk5psORNO7jIk71P4hHsbee2mcHVQkCNhNwgswJDPy5bQQi6ZpchIIGfEkejmvlGqrsmHJJ6U+cci0+juIEVHVSjTcxhS+hPWDlWCZTEAOpERiwqJqoDo5gpl7z2x2JS0rKAlkNiUosAVOEp6kgsBtA6EqStsLkaEP57GL72fuBH2CYpR8czECaUl8I/xY4ToQlIZ3bKFPVCNYwR1cRn2clzZkxKlnBLWtAXzCSFBI6kAU0MWXtV2fXMmpmIWkBRYhWh5dYD7Gyu+KsQBSgZbE5N74uslONBQocQp/wBKhAbi2ZM1U0qm5fY+0oM/spNQUsZfFR6hjs8DWns9akKCShJKsilWu1RnHQsKloKCwUKE8x4VCBZnezEFBSO8SaHmMlCPFiI9NfV8x6/vKhdnZmeualM2WpKM1qozD7oY5nKLvbpyZaUy0pCQAAG0ADADlCu87+mWcolrQkqUl1YXbE+QNIhm3h32EJ+9vodQelfSPNUuCoOYmq9SqQ7jHa36wS3WpOJ6Ev5QvWgrPOJ7UuWCRjdiz4aeVYDnWmWMgS+rt/aJGC9zGKSOJVe1l1sDOBqCAobjIEeyKsjI9R8Y6TbZCZiCk1SoNFBvGzCUsy60OZ1fIxdpKu5dp7fpHDJvAFpiNJIghTbxCpMWAwHXNxGFltRZjt0jrXYW6e5k99NdK5gACVUKUaeajXo0Uz9G1wd9MXaJiXlSahxRUzMDmEjiP8MXWdbVzFpSrIqAOeT1aIdXX8MhQMmaXaqmwHA5/aSdorEhaGDkKUXLbhvSKFZUKlqXJWSDVL7hQZ9so6BfdvSkYQMhT4RVL2kd4hE9KapOBRbQ5HyV74nDi5AmqCFBM2uPsTOVIM9ZxF1YUg6JJGLzIhDOSe/7tIDaq+UW26r9mSrPMlJ+9kX8L0UR1HtEVidNQhZma6PFyurKCOe8r0zOwO+1r487QS32EisLXw5xZpfEl1ZmFFvs5QcQGJOo25iDBj6lO3UIOhexiZNpUPvK9TEMnAvwljtGypJHOCigBa8m+1r/ABr/AJjGQPhO0ZHp6wjFFsMSi3kaQKtHr741ECEE55aFzrUSNIB76YtaUIHGtQSkDVSiAPaY1W4yyh32EsXeW1KtJcta/wCKktPtmP8AwxjKJniECXW8ZyZchNnSXwpSh92Ac9SQ/nFLtF3zCXAoc6acovN4WJCBRTqNTq0J7ynqJozNpHIeowck8xtPbt6Zr2ItSJU7u5hKRMYJW7MsGgPJTt1aOiW2QWdBAUk0PvBjks2QXc+cWO7+0cxgiYSTkFFvRXPnF2lrIw2v9DI9VRa+9fqJcrWXTiBAWmo57jpEyFAjG1WpyfOFNiskyYXmHClnYFydsqCDLytGFJSkgFm6RRVCU8yNAWsso3aibjmYtsukBSbWpPJvaDFoVdBNSXKhmdtTFctUtJWpAIo8cohlNzyZ1wVZdo7QOaqtIEWsmsRqnqSSDmKGMNsSzYY8Fgw+yzeGvlG8u5ZVrmIlzFFOIkJWkBwWLAvoTAEmdioaDlDW5/28pIJ/aS2/mHwg6RKuDMqYUkQa8/0SWlDmTNlzRsp5Z+IPqIQ2TsHblWiXJmSFy0qVxTKFKUDxHEHDtkNTHT71tM2TMxJWosoaux57pL5RYJF6CZLCxQ5EbKGf1sRHTTUo5K2sRJHasqgmxB72kCJcmzy0SJeFCUhkp+szqd3gCyyEBRVhFFFlNqRp6tEdos5nTcWLhB4hl0w7ux9IaYgGGFxErdZ3HtBTpFvvFhueTMVjWHAGWKh5FtIV3ytJQqWlKUpagSGFC9PSH4WpWIFLJ0DNCi13YmpxFny/vE1VWIuox37Smm3V1H2lZk2NbOE+0QqvyxkYFJAYqqNjDdExT4XLZECJbTZsSSkChA8W4Lx6i+1hKqdTa2eIglJbcR4sk7GPFz0pUU4sKgWKToYiWrVvMR0gZ1bi2Ilt1jwHEhxuPiIKsFoxhjnBC5nPyMAG04C6UB/rSDJvEBVRrjiNO6EZC3/TMzYegjyBsYfipLRbrsUglxCqagDOOv3/ANnO9coVhV0cekUC8eyVqSTwpWOTiHtTI4nzqalWGZUJ8xqxf/0WWQCXPnqpjWmWnogY1EdTMA/hiPs12LQvFNtUtkoUyUYiMRZyVfu1FBmX0zt91olyUdzLThQlympOZJLk1OcSvUCHaeZrPvWyze8JIwKbCly5JzPIQnRISQA4cmlIZ3isjPCAdDmeu0LbMAtSnYJQlz5bRz3sz2HtG07hMwW3SEAgIBUT74XzZKGUxy0IzOrGJbwtXEMBoMvV43utCFzUJVVKlhxvQ08ywhHzNYR5O1bmWHse/drJU6Atkp2LOS+1RTlBFqSjHrE9otCZaWACQMgAw9BCC12x3MVVKiqoXkiS0kZmLcXjG9JuGWyXxKBcvpoIobFC3OsWNVvKkMpmD9fOEN5TEaA4jnCarBmuJTRG0EGL7bIOIneBAioGsNVqeWSdvaKiE9pUU8TwSZxPNiGCWUw67JSyu2S2+7jWfJBA/wARTFVXbFGLt+jWUVqnTacKAgHmo4lf0p9YalM7gYqs1qZju+kFzQkl6ZvAFgnlBKHYEsX05w2tARiUVzAGrqKByQHzemUVyfMSpalDElzrzyHuEIqXV90JCGXbLXZZASCoHE+TMAaaeprHt3BTqUsMcgIUXXaVYcAXSpAPtA9/rBH21ac6D084clQFgc/4iShAIjG22tMtJ+O8KbFeJmqIAqAfdnC+9LZ3uQyz+cR3UFqLJASGwqIzL1+EC9Ri9hxDVFC37wWUlInFJrWCbQuuwhX2g/VzEkauPMMfjEcu2YgxhIBAjWIJhFpuX7SoCWhJmMaKLYmGQ0dvdCS8Oz0yU/eSpkvnXD/MHTFisc8hmJBFQRoRkRHRLqtneykrIDkEK6gsfVn846ejtUG08wG1tSgBgFf7/ecDXY1HKY45gGBJ13r0UPaI73eHZixznK5KQo/eQ6FeqWiq3n+jZ3NntBH7s0OP5ksR6GKzRZeMxqfiWnqCzAicm+xzfox5F/8A9nl4byP/AHFf9EewO1/KF4+m/wDc6wq8kaH1iCbbE6cXuHxhOi1A58oJStJFM4kp65mPIM5JoKJ7a1rUgZVyA97Qv7zAQ4c6iGAmAF9SGHL6y9IWWpQqVFjU+yEVup93eUUsDbBbyvQFWIiumtYr8+1KqxZ9InWvGVNWnpzgWbYVsCNdIlYFjcylCALCRSUrmKShIKlKNAMzFz7O3SJBKppHeGiQC4SNa/iPu6mAeyUoSpcycQMSyUpOyU5t1V/QImt147ZwYZKdjyYtt9W68CNbyUlTpzOkVm2ow5gjrB1kvQALJPFT01+EKbyt4XG1GVurvNpgr09oFMnh2j1VnJGLCSAdojkzAOLMvQfEwSq3KUGf0gMCGCbxcpZ8qv8AXrEJsoUKCkbzwxNYnsTqISKvp9ax4XhtArJcYWsJAelA+cdT7OXSizSRLSA6jiUQM1Fh7gB5QBc9gEtIccamc7bCLAoU6fCOhRUjLSDUNfAiG+sAoANQ+ZyPxaK3NsoJ8bAfiHMbZ6w8vRaMTBPUneE00DasS1AGYx1MkKJBjwqAQ5GvP6pBK7U4ydxn8esCxpLIHCcoUOmNw0ls60rWElgnX3uTFlnqQhBwJCQwYsz/ADpCWzLlIS2Dj/EVFj8jG1uK5qEhBLJoUwy5Cm2TFAZzxE99/rEY1KJwqplz+cBSEDbzhneUpKLO1cbAqfcFy1MmhUZjgQK3tYxjWviFyphBoaRcuyNv4VSyrLiSOR8Xw9YoyF6CDLttS5a0zBoa8xkR5iHUKvhuD94qrT3oROpd5HveQls9vStIWk0I+nhbePaRKQsSyFrSHOwq3mY7jVUVdxM51PTvUbaozLX3kZHL/wDW60fj/wAKflHsS/Hp6y3+k1vSOZKyA+dYLkWrnQZ9PowmVPIGHIRNZJoYvk+jv796f5xw6SZhsY7VPCuEVcZ7UplFURapinD0S5USaACjk6D35BzDqVNQMSiSkJQokmoFG888oqc22YxgQMMsFwDmpX41nVXsALDV3OAcmFTJyBC5lpbEEZbmhJ3bQbDz6GWW3HAiWkYpiuFI5mghJLSqYrChJUdkhzSOi3P2cl2ciYCpc3AxJIwpdsRSGpkzkmj7x6lTZj6QqjrTFu81tyJcmUiWB4UtTfNR8ySfOK3aZstQyIVqfdSLhabPLAJWyid8vIRV70s0sk4Q3SNrJZr4mUm6bZiSZNgWYvSNrTZyku9IjkJxKA5wCriEWm4XTnEsqN7TI1Zhk/ONELaPbczd2JvNsqsOKmdN6Rrd84S1hYJBHuIY+wxMu1DD6wpnr4qa/XxgVvusIy91uZ0i4pveLKiS6GfZzkPR4sE0HDm0Krmu8WeQhH3mClk5lZAf0ZhyAja8bcQimcXh9idUga9RriLrRZca8IUH1Ow3hTapeB8K8Xk0TWm1HN6wsWsnMxPcHgRtiJi1axGhBPzj1aksYhRMaAdcQkaErlkB3ca8oMu+1FDgJCsTBL6K05ZUgOVNo28eKOElL00jEmtmMr/mgy1IUhAUUqybFk1WLCrmKjKZhDU3fNmE4CCliS5AYa9aQqsN2z1imTsI9cm5MPaLYhEmUSae2JJyilg4L7QZNuaYhIxTA4+6NHgOZdkw1xUgO+ZqyG13lNCEy0EsThAFKnIE7ZxNaLrmS04kKxullhqjcp5RCuTMlsW4h4cQo8e2TtCSSmYjAoPUFxTeLqRDjqnjUemOgC3f1i/7KvZXpGQ7/wBMJ/En0jIZ4dOD8e/lI5ww+Fag3MkeYLiDbBjwjG4Kskj7wADKTsmniPkC0CBaEjEpCXeiVrGHd1Ur09diFPvTEvxitCUZqJYZmuw8hlEKAgZkoAY2EM7SXqlKe5SQ9CtsgPwjX2n3RXEWpzhT6xlrZSsLF3ZtX25mLj2T7PJlgzJwdaQCiXnhP4l/vZMnTWuTVRdueZUOgWEY9iLnXLe0TOHEkhCN0uDjVsKBh57Raplqwpd6nM+6EX2+YoLOFRJycHKEy73UAUrcHnAnUBRZRBFAsxLRjbrwxHOFM60PAq7ViMRqmRKCTzGlQJ5NU9I0sUgqNNNY1xwXLw0dVBp8vnDUNothIrUiZQmoGVcohxDNoOUpDMdGaum/WAl1LRoYT1poKwTcl3Km2mWG4UKC1nQBLkA9VADzO0CqLHKLl2IkfqpkxqrWwO4QGH+JSxBUxd55ztQx7apxBYe2E1vmoCTXieG9okqUokBgNYrV7S1J5wVS/eKS1sQBS3UBuYktMlDkAGmrwtXMjZVpUzuPjABrC0MiRGYAS5y0iGZMcsnyjdSn0iEsFZRozM4hFmQH4jG65nDTMVH10iBK2Ds0aoWwjLWm8xlKtTJUQ4cMz6H6EF3XPCQBlCSzrDV3YxiLSyqF4AjN4xeLSzGcFOWjXG9Rp0hUicopJDetYgRbCAz5kGBN56wjG2r7wFAFXc+UJk2VMtY/VpmFR4XzfatIaXYxdSq0OsAWm1AqJCBiQoqSMwQxyJ1EPosQwJgut1IEN+yTP+Hl+qIyKx/rTP8A/L9VR7HTuJH4bRWyULZaVhQPhUh/NiQfZDWw3Ym1rJKhLEsJK1J4SAScKQMiSQavRvI9Vt9zypgaZLSr8wBiq23sNLC+8kLXKWNjiSeRScxyyjX0xAuDmeTUi+RJRJRKQFSJYBKWUtWFS3BILk6FgaACsZd18GWvjRQ5lNfnA0yxTU1YA64ScJ5h6joX6mNpF6KTRThtMo41QOj3a4P84nTplHXpyJdVWpCpeJOUVW+J6JjhnHP4bQOL0UUFLkkqJ9YgRYJqk42ZJNOfQbRtWoalrDtBp0xT5iNRKCRp8IwWiDbVZVA1Ytzja7LD3iqiFrmG4giXOkShDRYV2JCaCFlqkwRxF4i5a2OUbWdRUWjFlQBBD7GPbMvCkhqvnGQocZoQCGzGf1pFu7OLWmzpC0FBBUEghiQVYsTaeI+j6xW+zEvHaEkpBCQVV0LcJ9SIttotTEjlDqVlG8n0iaoudoHrPbRbThKdXr8IR2iYCeIwHbLbxEgwpm3kpzlCzULzfDCCe3ioBRSPDAYMYuZjrGiqVgrT0kKoimKjRS3jxoKwtAzeToWSKB4g7zN4874jIRDMQraPTZsJ7Egah/rzBiGXMIMQucVQ/wAoJSkaCkERiGvMYXdb8K3O1DtE1olomLKgoh6moA50OvSFSGDkvybeCrOtLBynIZ18/wC0BYwsQ+XLBQEBbEOcWH2FjWIbXYhKOMzAcklg2YJGp2ziCxWtlrUGYUT8/reG93TbPMI7yWqasKJCfujRzuc+UHTplm2j6wXcIt4qwyd0+kZF5xo/4JHon5RkW/CnzknxA8o+kXzJmcK2Srn8DBS7ICHSQfbFKnyz7a5RBIvGdKLoWQPwmo9NPJoVS/EjxUH1EW2m7qZbbTd4IqK8oQ3jcqyKJSsbOUnyNRB9h7YSzwzk4f3gHHzHt6w+kqlTUhUtaVA5FJBHspHQVqdZeQYq70jnE5haZKpNTLWBqFpLDniSSD9UjxN7FaBiVQAAEH3NHTJ1lOocQltnZ+RMd5YBOo4a70ziWpoAb7TaUprL/MJS+9G7+kS2K0iWosaHygq29kJif2U2myxUfxJ+UVq8LDaJCuNCsL+MAlLbuAW82iFtJUUyta6MMGWO0Wpy41gedMSU8+cIEWtWFS8SSEkDOpeN02tw/shDUmEYCDGBXp7o8Wk6iFKbySlVSB1giXajMWlCVBS1KCUh8ySwy0jfDfynsS79lJGGWqar76wAf3U096j6QXes0sohOECjkZxJaZqJUlEpKnwpSHyqBxKruS8VK2W5alFnW20ZUa3QsCipbrMgtKyXML5lY8tE5SVEKSQdiCPfGoDjEThDt1poPT1jEUiHVdVBZjiahWE1jzEpWQpB1nu9KmKyWIJDbMS+r5e7mzGRciiQM2pB7xe3eTJWRyQpldSlZ0ieXJXFlXcgTmz+Z8ohN34aqLJ3ND5DOML2jgL8RMJWkbpsaj/nDKZNQxAJSkbM55kkQGVoFSpTeXvgd9+IYSwzBpl3Eaj1iBUkj+xie0XhIDJxOTsok8ssvOAJ9qoX4W15DmYaqueRMJAmy0VFOsa2lKAQoMAM3y84HsXez1NKTiD1WaJHnmo9Iu1zdkwkhczjXm5DAH91OnUuecWUtK55k1SuqyuWK65k4uAZaCalmJ/KnQczF4ua6Uy0gJDc/nDizXYEiohB2n7RplAy5OEzeeSXyKm5VA16Z3pTSktzInqtUNhHuAbxkcp/0tbf+IV6CMgfiacDw38p0O12EqfjXUDKlRVxm2Q9NagrJ92Jq5Wep6DQbkn1i3zJb/T/AFlAU2y7/D4cz7HjguGXiWqyymLu1H4fUn3PsfQ0pSB0mZIVjlKMs64Tm34hkc9Ytc6x+8+lPrqdjCy2WRx097/MnzgFquDyYbqpWeXR+khaFmXapbgO0yW9RTNBqaV4SXYsIu933lZrUjHJmJWORy5EZg8i0cVviyhExKmFWDNnXAcq1Ch6RpdS1y1qCVFKkqJSpJY51y8qCnrHbTVEIGOZM9FSt1ncpkgjpA0yzAxU7q7ZTpfDNT3qdwwV8j7Itt33vZ7QP1awFapNCPI++H09RSqcHPlEMjpyIit3ZqzzDiMsBTu6eEnq0LrT2WQogYyA7+Ea9G5ReFyCOYgVcqCeijciatV14MrSOxslqMTzArBFjuezyFpUqWkTWVhammEnzBIh0h05Vip9trwmIGJEviBwhTF0pYnEKsatxMWJ3iXUpsAK8nHpHJVuCW4GfWOJvdrxulAIIBfiNdOo1FfKFEi1YV8KEhQegAHJ/oxUrNf8xGallLlwpYU4NRmKHhVV6tBljtcta8S1vRsGVeZyPkY57I4YER2n1dNgVOD6yxWa4FWhWOYrCh6sxJ6aCBL9uiWhctMo8AwlSalyHd+ozNfQQTI7TS0SylSk0okPlCMXklSwvE4L65P9D2wNTpUbRnvGVkNVSCeOAIwlI8SlHIfEYQX0DEfDQhm/+6VhBdI2AcsKitM9Yn7QLQBnQsRzpT3xVbOlLOUuedXfwjkT0oHhNCnuG43nMoVFosWb2tHc3tJMmPxM5+7zpp1gP/SPEyjX97XpGsy0FJUzDIKKUgVqyEbMCzl6jRoqt5zStRJ+JiqnQVzKf6meAuJbbRfEmW4UoPyqfQQht1/hYUEhgoENqXDdBCCzoCjh1iy3N2VmTVDhMXJpEU+cP4ksL3iazhayyEsTlmT5xb+z/Ylc0hUx1cjl5xeuz3YlEsArHl8zF1s1jSgAAACK1pdzEPXPAiG6rgRLSAAKbBodIsyUhzQCCphSkOSwEcw7a9uhj+zSSx+8sZDMYQfxUPTrk1iEW8SAzm0J7X9skpUqzyFAzAOI/h//AFy0dztHMbSpctZmByFElb5k0cvvzOp5xvbbOVELR4wc9w4zPrG9mnd4yCP1igxQxqTt6GOe9Qv1dvKVogQTz7ajePYYf6tzP92P5hHsK2L5GHuE7SqWNn+v7xGuXz303/ufeI0NlP3pin1YkP0d2qfaBWkaCwoq7qPMjqGYDIBPPhTqmJ2RZOGMjnBAd1Cgc5Zb15JV6HaFdrEsUJrzf16Mc9kk/dMPFWJGeEebnVJ33SDyYGNFWRAZkDIMyUjJwPf5Od4U1NYxahnOe0sqWqXjSTQg5Fxi4S4NNUpIOpG8IJU8d4hQQtWJITwhwTRPCxfMAZZtnQnq9vsSVoUncHJtaijHJxp7Wij2iQBLUDidCgqoUWzCnBPhTmaMxrWHU2Xba394+gCykEyEiaRwy/VX9uactArYAwLkTnxOlLMQRmKVIIOjOPzcuK02dPeJCgk8QyG9XAeuYVVsxTMRFOsnL68tK+gO0SmrtOAJqi4yYBZu2drsmHvWnSySCC4WMiwUzFuIVDnhqKmL3dfaKy2kAJWErI8KqHy0PkTHPb0u0rQpIFcxyUmo1Go1/ENoT2BOKXzQaZ5ZivSn8IyeOhS1rbLnNuYt9Mp4na1SGqKwJbrKlYqHBoRHOZXa212TCoHvpZYFKzUbYV6PlV60EXm6u1lmtAHEEKUzBVH6HI+/lF6V6dRQeL+clqUnX2lZvXsoXUqWAcT0JLgnWpZWQo6fOKpabuCVlBQULct4gWBAHCRsTUfh9e0LswNU1hdbLChYwzEBQ2UAfR8jzgKmmB+U2kppgzkQKTwTOLJqVG1QQauDk0ZZbns8wp41pVXiBGVGBBGQrptWLxeHZCWovKWUfuqdaTs9Qr2loQ2js7NRRUvLJcohQ5EoUx00MSnT1R8uP0hIai4Bi2yWRSpEtDk4VTA7ZDvGBrkHJPlGISlCgVKqCThTWpyBJpRhvmY9FmmoUrEtXFsVM2ykmvrGgu6aVAJSVvkQD7doVUo1AbzaoJN5Bbl8ICUsG3fzNBVmhBOsx+nMXJFxT1M8tSXcBwxcVyNauOR3oYsVydiQFY5gxVoGYcnDmsN09N+wiQhMrPYzsipahMUhho40Osdfuu7JcoAACPbFYcAAAaGKENHTVbCOHFpukRpPnJQMSiwiO1WlMtOJRjj/AG47XLtGOVIWycipJ8QbwoOxyKtemfncKLmEqFjYQnt326UsmTZ6pBImLSajdKG13PKm8UNCkTQwDgblimvJzE10IM0iUhIxuRhFMqe5J9Isdj7HMvHMWU7oRqXJqT1284jZmc8ZHErVQgldstknqWlEs40nlVIrUqyAoIvFzXKmUMR4lnNR0BLsnYfKGNksKJYZCQB7+ZOsFNBKlsnmLZ7yPu48jd49hkCWwUp7/rl7fXXE2oB5/P69saDLPXqNOX1WPWPIepH1z6Rxy0ZabE5Or2Uy/wA/bGhPl9dObehj3HsfRj7M9fYY1Y1YV00yz05t6RhM20imIxDIH2nfLzB9fOq2iyoRPWCQEqLMkJJ/WDEkAMSQCktUZ7MDbJqS2j7mnPMc8J9ecVTtLYnXLmMTVi1TwHGBxBnYrSOpc6xqWvG0Cd5A7ib3JaRgUj8Cs1BQoasCT+6vYUTzMMFynJr1IY+e+bnofRVdVnRLnqNEpWCUlhLcUWCMBCSDhFeStSxezrVKSAysWQGAFRLig4RqBh6qTuIXVpEm4EZUcK/vmK5lnduHyyPT1cfwiKmizd3a1o0mZZfeBUg8i6VlujPF4VapaiQl18w2rOQTyUhfMLBDvFb7TpmFCZqZZCpaiCF5B1AhqEH9YgjNjwjUtlFGBKnvCSoGNovt13Y0LQQAR4c9MiN60d81DpCu6ziQUnNOlcufQ4g37oixTftCxLXLlJGNgS7skhQCvEA6TgUxZ2NQSQlFMu+dLtXEpKErqwamLDRgPuzBhc8y1SzkQ7SpI8+Zoa+ADC/9ZLXY8KkLxy3ZUtbn+QiqaA6tlSLtdfbaRMCRN/VkgMSQUl9lCnq0Uu23GVoUgrVUUNaM7Gh2am6DzdFd93AhUteIrQrUihBBpTRTa/eMU0NVtTm9ucdol6IbNp3JKETAChQINaRBMs51Eckl2q0WdOKzLUkpzl1Uk78JetcwxzrFuuHt8FoHfIbQkVY6uMx7Ytp6lGFziTPpmGRmPrTd6F+JIMDWe45YU4xJ6KIhxZrVJnB5awfMRuuzkZVigAHIiDcYhtiu+WgUFd/7wcEgQBYLR90wwJjYM9gC8ryRJQVKIDB6lgBuToIEvu/JchClFQDZk6bDmeUcX7VX9NthIBKUBThJ+8RUFTUJyYZCAeoq8xiUyxh/bXtPMtYVLlqKZeRIoV6NyTy112iqWS0Ygx8Y0NNP7iNrJPxcJ8QoedW+EaW2zEfrE0Iz0pqfZELOXO1ue0sVAoxPVzVy5iZ8sstJGXIj+4PKOm3He8u2ShMTRYA7xH4VM/od45pKWFJCvX3ejxFd14TLJaAqWaH7tWIo4PKnuhlJux7QKi3zOwxqYGuq8ZdoliZLP5k6pVsfqsEmHRHE0aPY8ePY9NlkVNSC2IO2h4s6mnl5nnEP25GLCAolizU5UI08NdiDoWkRYpSQAEABuZGzMaDNulIlSlIoKDUafFvZHIO0QxuMGVapqgMEvDiGaw5TsSCUv40qwj/drD1BjAJxNVJSNWZ6tQOkg+Ih95cs5EgGPSmmzHf5eyPPllTnrQ/5CPFvSe2wUWeYXearyDcxUcydNRsXAvi7kmSrEVkjiGIv4cgNqMHzoDDsJ9nU8vT+8azkIIIUAxFXbLz+qRoc2mYVwfKUNYl8ExOEzEq4sJ7xz4kqWk8T4VPthpQB03SVIRQ4BWoISNWPy/litEhHeSyK8RSQMXGmr7lRS2VA2QcQ3uK2KXLAP3dsQZOeoA1UA34BzEFUNxcmWahRtBHb9DGYRy+tsuY9YHtVgExC0HJQIq+obfkk/wAJgsONz9VY7eIeYjFPmfr6z84RYScMQcSr3LI4VyFqAKVFjws4Lqbm+JWviOWECJL6u9EyWfxIBd3YhiFDaoHqeceX0TKtEuaHZXi0dswP4XFdTpDNNnCVFZbiZjwtiBpxAAkqIDO+ceYdxKnaxDjv/DEt0TRNlguCpLBTNyKVFuRByzxNCTtBYShaJ0sVcAtufACHchxgIAyHOG1mR3VqUgA4VuASysziRkxAdStNn0MGXnZe8lqQWrk4BYllJLLGYxPnqfNR6HuOI0kBvQyuzEJUlMwGigM6Fi+EnZmq2bZxW1S+5tLCkuYdQWBL7ZsR/j0h/cEnFLXLcjCTSmvJPNA0+8I87QXXjk94AXlso6MB4qGrthY84ZTO1ip4OP2niLNaQhCk1QopVuktWu2dRl1g3s/25npJlzwFlNMSaEtQ0NCXBNGppGl2/rJaVHMOFYql00JLZOQT0JhJ2is/dqE1JNCApiSaKKU5DwtjScqnI0humqurFAf9xVSmrYM6lZO0kmZUEONMiPIxpe3alEtHiYtRIbEeg06xyz7alaUrloK3bEBoCUYhlmMQzIdnychTbbNNlrTMSyEqZ9gVUNeZKiMvn0U1DkWYAH/Mk8Bb4jHtZbJtoPeKUyUF0ofhA1VXNTa8zCuzW1KwAkurUZagehKvow2kWNKgFElT1BLjMkjn94+0BgWhfNk9xMCkgBKtHZ9waNmpx00hAqh+lsn7Rwpm2MQK0pmEJmoRhNHBrmBXbUg8vYZI7yYkKcMRUULZlvQphylAIcZEZ9WAZnhbIT3UwobgU2HI7JD1f7pHkDzgfF3LYAXHHtPBPMxP3M2WspoyssgMTOwo2bj06RFbrNMKa5pc6Oz09lfKLDetixIcDiTUZcn9ggOSvGgL5MrkWenqPWGpXuAwA9YLU/UwS472nyFpmS20C06KS5oWy3fT1jrF03nLtUsTJRr95BzSdlCOQy5RQsoPhNU88vrygqy22bZpgnSiXHiTopNSQofTRQHF7RbU8XnX8B2jIof+00f7g/zj5RkMtFWM7BZ/B/B8DG8zP+b4RkZHD7Ro5m68/X/5Rmv1vGRkHMg9pyPQ/wBJiVXhHX4GPIyBHzGY3Er1v/72j8vwg25fHM6n/mGMjIYOJbV/K+gh/wB9Pn75cS6/WwjIyE9pJE3aj9kn84+MeXJ+wkdEf0iPYyN8pUfyh7xN2h/by/8A0v6oeScvI/0rjIyJ6naMf5FlUs3/AIhO6r/+qHSPD/HN/qjIyCfkfSa/zD2lDP7G0fkX/wAq0wZfX7GZ+Sd/XJjIyLE5Hv8A4EXU/Mmlw/sT+aZ8IEvn9kn86PeqMjID/t+s3vI7m/ZJ/Mr3iMvP9mfzS/6hGRkYv531mzyxfsJfQe4wNffjl/xxkZBr+Z94uMzCO6P2a/zD+lEZGRlL5W+k0wS8P2yOkbWjwn8p9xjIyLB/xizxK1GRkZFsTP/Z" alt="" />
                        <div className='p-3'>
                            <h2>Paruppu vada</h2>
                            <p>15$</p>
                        </div>
                        <div className='flex p-4'>
                            <button className='p-2 btn'>-</button>
                            <button className='btn border p-3'>1</button>
                            <button className='p-2 btn'>+</button>
                        </div>
                    </div>}
                </div>
            </div>

        </>
    )
}

export default Cart