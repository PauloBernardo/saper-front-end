import React, {useEffect, useRef, useState} from 'react'
import {Button, Card, Form, Row} from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { useAPI } from 'service/API'
import alertify from "components/alertify/Alertify";
import { useNavigate } from 'react-router-dom'
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

import styles from './BoxesAdd.module.scss'

type StudentData = {
  name: string
  capacity: number
  latitude: number
  longitude: number
}

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function BoxesAdd() {
  const map = useRef<any>();
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [state, setState] = useState<StudentData>({
    name: '',
    capacity: 0,
    latitude: 0,
    longitude: 0
  })
  const api = useAPI()

  function success(pos: any) {
    const crd = pos.coords;

    console.log("Sua posição atual é:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`Mais ou menos ${crd.accuracy} metros.`);

    setState((state) => ({...state, latitude: crd.latitude, longitude: crd.longitude}));
    map.current?.setView([crd.latitude, crd.longitude], 13);
  }

  function errors(err: any) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    if(navigator.geolocation) {
      navigator.permissions
          .query({ name: "geolocation" })
          .then(function (result) {
            if (result.state === "granted") {
              navigator.geolocation.getCurrentPosition(success);
            } else if (result.state === "prompt") {
              navigator.geolocation.getCurrentPosition(success, errors, options);
            } else if (result.state === "denied") {
              alertify.error("Acesso a localização negado!");
            }
            result.onchange = function () {
              console.log(result.state);
            };
          });
    }
  }, [])

  useEffect(() => {
    if (map.current) {
      map.current.on('click', (e: any) => {
        setState((state) => ({...state, latitude: e.latlng.lat, longitude: e.latlng.lng}));
        map.current?.setView([e.latlng.lat, e.latlng.lng], 16);
      })
    }
  }, [map.current])

  const onUpdate = (
    e: React.ChangeEvent<any>,
    name: 'name' | 'latitude' | 'longitude' | 'capacity',
  ) => {
    setState((state) => ({ ...state, [name]: e.target.value }))
  }

  function handleSubmit(e: any) {
    e.preventDefault()

    if (state.name && state.capacity && state.latitude && state.longitude) {
      api.post('/boxes', state).then(() => {
        navigate('/boxes')
      })
    }
  }

  return (
    <div className={'container'}>
      <Card className={'col-lg-12 col-12 m-auto'}>
        <Card.Header>
          <Card.Title>{t('pages.box.add.title')}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <MapContainer ref={map} style={{height: 400}} center={[state.latitude, state.longitude]} zoom={13} scrollWheelZoom={true}>
              <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              />
              <Marker position={[state.latitude, state.longitude]}>
                <Popup>
                  {state.latitude} - {state.longitude}
                </Popup>
              </Marker>
            </MapContainer>
            <Row>
              <Form.Group className='mb-3 col-6' controlId='formBasicPassword'>
                <Form.Label>{t('pages.box.add.fields.latitude')}</Form.Label>
                <Form.Control
                    value={state.latitude}
                    type='number'
                    placeholder='Password'
                    onChange={(e) => onUpdate(e, 'latitude')}
                />
              </Form.Group>
              <Form.Group className='mb-3 col-6' controlId='formBasicRepeatedPassword'>
                <Form.Label>{t('pages.box.add.fields.longitude')}</Form.Label>
                <Form.Control
                    value={state.longitude}
                    type='number'
                    placeholder='Password'
                    onChange={(e) => onUpdate(e, 'longitude')}
                />
              </Form.Group>
            </Row>
            <Form.Group className='mb-3' controlId='formBasicName'>
              <Form.Label>{t('pages.box.add.fields.name')}</Form.Label>
              <Form.Control
                value={state.name}
                type='text'
                placeholder={t('pages.box.add.fields.name') as any}
                onChange={(e) => onUpdate(e, 'name')}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicLogin'>
              <Form.Label>{t('pages.box.add.fields.capacity')}</Form.Label>
              <Form.Control
                value={state.capacity}
                type='number'
                placeholder={t('pages.box.add.fields.capacity') as any}
                onChange={(e) => onUpdate(e, 'capacity')}
              />
            </Form.Group>
            <Button variant='primary' type='submit'>
              {t('actions.add')}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default BoxesAdd
