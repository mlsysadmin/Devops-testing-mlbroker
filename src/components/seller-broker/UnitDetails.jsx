import React from 'react';
import { Form, Input, Radio, Slider, Typography, InputNumber } from 'antd';
import { BedOutlined, CarOutlined, HomeOutlined } from '@ant-design/icons';
import '../../styles/seller-broker/unit-details.css'

const { Title, Text } = Typography;

const UnitDetails = ({ onComplete }) => {
  const [form] = Form.useForm();

  const onValuesChange = (changedValues, allValues) => {
    // Check if all required fields are filled
    const isComplete = Object.values(allValues).every(value => value !== undefined && value !== '');
    onComplete(isComplete);
  };

  return (
    <div className="unit-details-container">
      <div className="unit-details-content">
        <Title level={3}>Unit Details</Title>
        <Form
          form={form}
          layout="vertical"
          onValuesChange={onValuesChange}
        >
          <div className="form-row">
            <Form.Item
              name="sellingPrice"
              label="Selling Price"
              rules={[{ required: true }]}
            >
              <Input prefix="PHP" />
            </Form.Item>
            <Form.Item
              name="discountedSellingPrice"
              label="Discounted Selling Price"
            >
              <Input prefix="PHP" />
            </Form.Item>
          </div>

          <div className="form-row">
            <Form.Item
              name="furnishing"
              label="Furnishing"
              rules={[{ required: true }]}
            >
              <Radio.Group>
                <Radio.Button value="Yes">Yes</Radio.Button>
                <Radio.Button value="No">No</Radio.Button>
                <Radio.Button value="Semi">Semi</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="classification"
              label="Classification"
              rules={[{ required: true }]}
            >
              <Radio.Group>
                <Radio.Button value="Brand New">Brand New</Radio.Button>
                <Radio.Button value="Resale">Resale</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </div>

          <div className="form-row">
            <Form.Item
              name="beds"
              label="Beds"
              rules={[{ required: true }]}
            >
              <Slider
                min={0}
                max={10}
                marks={{ 0: '0', 10: '10' }}
              />
            </Form.Item>
            <Form.Item
              name="bathrooms"
              label="Bathrooms"
              rules={[{ required: true }]}
            >
              <Slider
                min={0}
                max={10}
                marks={{ 0: '0', 10: '10' }}
              />
            </Form.Item>
          </div>

          <div className="form-row">
            <Form.Item
              name="parking"
              label="Parking"
              rules={[{ required: true }]}
            >
              <Slider
                min={0}
                max={10}
                marks={{ 0: '0', 10: '10' }}
              />
            </Form.Item>
            <Form.Item
              name="floors"
              label="No of Floors"
              rules={[{ required: true }]}
            >
              <Slider
                min={0}
                max={100}
                marks={{ 0: '0', 100: '100' }}
              />
            </Form.Item>
          </div>

          <div className="form-row">
            <Form.Item
              name="floorArea"
              label="Floor Area"
              rules={[{ required: true }]}
            >
              <Input suffix="sqm" />
            </Form.Item>
            <Form.Item
              name="lotArea"
              label="Lot Area"
              rules={[{ required: true }]}
            >
              <Input suffix="sqm" />
            </Form.Item>
          </div>

          <div className="form-row">
            <Form.Item
              name="pricePerSqm"
              label="Price per sqm"
              rules={[{ required: true }]}
            >
              <Input prefix="PHP" />
            </Form.Item>
            <Form.Item
              name="propertyIdNo"
              label="Property ID No"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default UnitDetails;