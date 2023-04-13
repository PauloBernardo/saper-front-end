import React, { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet';
import { useAPI } from 'service/API'
import { useTranslation } from 'react-i18next'
import {Link, useNavigate} from 'react-router-dom'

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

import styles from './BoxesList.module.scss';

type Box = {
  id: number
  name: string
  capacity: number
  latitude: number
  longitude: number
  created_by: number
  teams: number[]
}

function BoxesList() {
  const navigate = useNavigate();
  const { t } = useTranslation()
  const [boxes, setBoxes] = useState<Box[]>([])
  const api = useAPI()

  useEffect(() => {
    api.get('/boxes', {}).then((res) => {
      setBoxes(res)
    })
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{t('pages.box.title')}</h1>
        <button onClick={() => navigate('add')} className={'btn btn-sm btn-primary'}>
          {t('actions.add')}
        </button>
      </div>
      <div className={styles.cardsContainer}>
        {boxes.map((b) => {
          return (
            <div key={b.id} className={'card ' + styles.card}>
              <div style={{ width: '100%', height: 200 }}>
                <MapContainer style={{height: 200}} center={[b.latitude, b.longitude]} zoom={13} scrollWheelZoom={true}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                  />
                  <Marker position={[b.latitude, b.longitude]}>
                    <Popup>
                      {b.name} - {t('pages.box.capacity')}: <strong>{b.capacity}</strong>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>

              <div className='card-body'>
                <h5 className='card-title'>{b.name}</h5>
                <p className='card-text'>
                  {t('pages.box.capacity')}: <strong>{b.capacity}</strong>
                  <br />
                  {t('pages.box.latitude')}: <strong>{b.latitude}</strong>
                  <br />
                  {t('pages.box.longitude')}: <strong>{b.longitude}</strong>
                </p>
                <Link to={'edit/' + b.id} className='btn btn-primary'>
                  {t('actions.edit')}
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BoxesList
