import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import styles from './PublicPage.module.scss'

import Paulo from 'assets/img/paulo.png'
import Saulo from 'assets/img/saulo.png'
import Thalyson from 'assets/img/thalyson.png'
import Saper from 'assets/img/saper.png'
import brandImage from 'assets/img/brand.png'
import Brand from 'assets/img/philips.png'
import PostInscricao from 'assets/img/inscrito.png'
import Student from 'assets/img/student-ifce-saper-2.png'

function PublicPage() {
  const { t } = useTranslation()

  return (
    <>
      <header data-bs-theme='dark'>
        <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
          <div className='container-fluid'>
            <Link to={'/'} className='navbar-brand'>
              <img className={styles.brand} src={brandImage} alt={'brand'} />
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarCollapse'
              aria-controls='navbarCollapse'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarCollapse'>
              <form className='d-flex ms-auto' role='search'>
                <Link to={'/login'}>
                  <button className='btn btn-outline-success' type='submit'>
                    {t('pages.publicPage.login')}
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div
          id='myCarousel'
          className={'carousel slide ' + styles.carousel}
          data-bs-ride='carousel'
        >
          <div className='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#myCarousel'
              data-bs-slide-to='0'
              className='active'
              aria-current='true'
              aria-label='Slide 1'
            ></button>
            <button
              type='button'
              data-bs-target='#myCarousel'
              data-bs-slide-to='1'
              aria-label='Slide 2'
            ></button>
            <button
              type='button'
              data-bs-target='#myCarousel'
              data-bs-slide-to='2'
              aria-label='Slide 3'
            ></button>
          </div>
          <div className='carousel-inner'>
            <div className={'carousel-item active ' + styles.carouselItem}>
              <img
                src={Saper}
                className='bd-placeholder-img'
                width='100%'
                height='100%'
                aria-hidden='true'
                alt={'img'}
              />
              <div className='container'>
                <div className={'carousel-caption text-start ' + styles.carouselCaption}>
                  <h1>{t('pages.publicPage.slides.first.title')}</h1>
                  <p>{t('pages.publicPage.slides.first.description')}</p>
                  <p>
                    <Link to={'/login'} className='btn btn-lg btn-primary'>
                      {t('pages.publicPage.login')}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className={'carousel-item ' + styles.carouselItem}>
              <img
                src={Saper}
                alt={'saper'}
                className='bd-placeholder-img'
                width='100%'
                height='100%'
                aria-hidden='true'
              />
              <div className='container'>
                <div className='carousel-caption'>
                  <h1>{t('pages.publicPage.slides.second.title')}</h1>
                  <p>{t('pages.publicPage.slides.second.description')}</p>
                </div>
              </div>
            </div>
            <div className={'carousel-item ' + styles.carouselItem}>
              <img
                src={Saper}
                alt={'saper'}
                className='bd-placeholder-img'
                width='100%'
                height='100%'
                aria-hidden='true'
              />
              <div className='container'>
                <div className='carousel-caption text-end'>
                  <h1>{t('pages.publicPage.slides.third.title')}</h1>
                  <p>{t('pages.publicPage.slides.third.description')}</p>
                </div>
              </div>
            </div>
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#myCarousel'
            data-bs-slide='prev'
          >
            <span className='carousel-control-prev-icon' aria-hidden='true'></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#myCarousel'
            data-bs-slide='next'
          >
            <span className='carousel-control-next-icon' aria-hidden='true'></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>

        <div className='container marketing'>
          <div className='row'>
            <div className='col-lg-4'>
              <img
                src={Paulo}
                className='bd-placeholder-img rounded-circle'
                width='140'
                height='140'
                role='img'
                alt={'img'}
                aria-label='Placeholder'
              />
              <h2 className='fw-normal'>{t('pages.publicPage.professors.paulo.name')}</h2>
              <p>{t('pages.publicPage.professors.paulo.description')}</p>
              <p>
                <a className='btn btn-secondary' href='#'>
                  {t('pages.publicPage.professors.viewDetails')} &raquo;
                </a>
              </p>
            </div>
            <div className='col-lg-4'>
              <img
                src={Saulo}
                className='bd-placeholder-img rounded-circle'
                width='140'
                height='140'
                role='img'
                alt={'Professor Saulo'}
                aria-label='Placeholder'
              />
              <h2 className='fw-normal'>{t('pages.publicPage.professors.saulo.name')}</h2>
              <p>{t('pages.publicPage.professors.saulo.description')}</p>
              <p>
                <a className='btn btn-secondary' href='#'>
                  {t('pages.publicPage.professors.viewDetails')} &raquo;
                </a>
              </p>
            </div>
            <div className='col-lg-4'>
              <img
                src={Thalyson}
                className='bd-placeholder-img rounded-circle'
                width='140'
                height='140'
                role='img'
                alt={'PROFESSOR Thalyson'}
                aria-label='Placeholder'
              />
              <h2 className='fw-normal'>{t('pages.publicPage.professors.thalyson.name')}</h2>
              <p>{t('pages.publicPage.professors.thalyson.description')}</p>
              <p>
                <a className='btn btn-secondary' href='#'>
                  {t('pages.publicPage.professors.viewDetails')} &raquo;
                </a>
              </p>
            </div>
          </div>

          <hr className={'featurette-divider ' + styles.featuretteDivider} />

          <div className='row featurette'>
            <div className='col-md-7'>
              <h2 className={'featurette-heading fw-normal lh-1 ' + styles.featuretteHeading}>
                {t('pages.publicPage.slides.first.title')}
              </h2>
              <p className='lead'>{t('pages.publicPage.slides.first.description')}</p>
            </div>
            <div className='col-md-5'>
              <img
                src={Brand}
                alt={'brand'}
                className='bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto'
                width='500'
                height='500'
                role='img'
                aria-label='Placeholder: 500x500'
              />
            </div>
          </div>

          <hr className={'featurette-divider ' + styles.featuretteDivider} />

          <div className='row featurette'>
            <div className='col-md-7 order-md-2'>
              <h2 className={'featurette-heading fw-normal lh-1 ' + styles.featuretteHeading}>
                {t('pages.publicPage.slides.second.title')}
              </h2>
              <p className='lead'>{t('pages.publicPage.slides.second.description')}</p>
            </div>
            <div className='col-md-5 order-md-1'>
              <img
                src={Student}
                alt={'student'}
                className='bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto'
                width='500'
                height='500'
                role='img'
                aria-label='Placeholder: 500x500'
              />
            </div>
          </div>

          <hr className={'featurette-divider ' + styles.featuretteDivider} />

          <div className='row featurette'>
            <div className='col-md-7'>
              <h2 className={'featurette-heading fw-normal lh-1 ' + styles.featuretteHeading}>
                {t('pages.publicPage.slides.third.title')}
              </h2>
              <p className='lead'>{t('pages.publicPage.slides.third.description')}</p>
            </div>
            <div className='col-md-5'>
              <img
                src={PostInscricao}
                alt={'img'}
                className='bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto'
                width='500'
                height='500'
                role='img'
                aria-label='Placeholder: 500x500'
              />
            </div>
          </div>

          <hr className={'featurette-divider ' + styles.featuretteDivider} />
        </div>
        <footer className='container'>
          <p className='float-end'>
            <a href='#'>{t('pages.publicPage.backToTop')}</a>
          </p>
          <p>&copy; 2023–2023 {t('layout.brand')}.</p>
        </footer>
      </main>
    </>
  )
}

export default PublicPage
