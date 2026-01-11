import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Database, TrendingUp, AlertCircle, Zap, Cloud, GitBranch } from 'lucide-react';

const DataEngineeringPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const slides = [
    {
      title: "Introduction to Data Engineering",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <Database className="w-32 h-32 text-blue-600" />
          <h1 className="text-6xl font-bold text-gray-800 text-center">Data Engineering</h1>
          <h2 className="text-4xl text-gray-600 text-center">Foundation and Modern Architecture</h2>
        </div>
      )
    },
    {
      title: "The Data Reality in 2025",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-8 h-8 text-red-600 mt-1" />
                <div>
                  <h3 className="font-bold text-xl text-red-800 mb-3">The Problems</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>Poor data quality costs enterprises $15M annually</li>
                    <li>73% of enterprise data goes unused for analytics</li>
                    <li>Data engineers ranked #3 most in-demand tech role</li>
                    <li>80% time on data prep, 20% on insights</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
              <div className="flex items-start space-x-3">
                <TrendingUp className="w-8 h-8 text-green-600 mt-1" />
                <div>
                  <h3 className="font-bold text-xl text-green-800 mb-3">The Opportunity</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>Market growing at 22% CAGR</li>
                    <li>Enterprises spend $200B+ annually on data infrastructure</li>
                    <li>Competitors already there: Thoughtworks, Accenture, Deloitte</li>
                    <li>Average data platform project: $500K-$5M (Industry benchmark)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
            <p className="text-xl text-gray-800 italic">Data engineering is infrastructure for the AI age</p>
            <p className="text-right text-gray-600 mt-2">— Gartner, 2024</p>
          </div>
          <div className="bg-gray-100 border border-gray-300 p-3 rounded text-xs text-gray-600">
            <p className="font-semibold mb-1">Sources:</p>
            <p>Multiple sources quoted by LLM: Gartner, Forrester, LinkedIn, IDC, MarketsandMarkets.</p>
            <p>I didn't get the time to verify and add the exact link to the sources!</p>
          </div>
        </div>
      )
    },
    {
      title: "What is Data Engineering",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
            <p className="text-2xl text-gray-800 font-semibold mb-4">Simple Definition</p>
            <p className="text-xl text-gray-700">Data Engineering is the practice of designing, building, and maintaining systems that collect, store, process, and deliver data reliably at scale for informed decisions.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">The Analogy: Data is Like Water</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow border-2 border-blue-300">
                <h4 className="font-bold text-blue-700 mb-2">Source</h4>
                <p className="text-sm text-gray-600">Rivers, wells, rain equals apps, sensors, APIs</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow border-2 border-blue-300">
                <h4 className="font-bold text-blue-700 mb-2">Pipes</h4>
                <p className="text-sm text-gray-600">Plumbing systems equal data pipelines transform data</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow border-2 border-blue-300">
                <h4 className="font-bold text-blue-700 mb-2">Use</h4>
                <p className="text-sm text-gray-600">Clean water reaches homes equals quality data reaches analysts</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-3 text-sm">
            <p className="text-gray-700"><span className="font-semibold">Source:</span> The Data Engineering Cookbook by Andreas Kretz</p>
            <a href="https://github.com/andkret/Cookbook" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View resource →</a>
          </div>
        </div>
      )
    },
    {
      title: "Understanding Data Roles",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-400">
              <h3 className="text-xl font-bold text-purple-800 mb-3">Data Analyst</h3>
              <p className="text-sm text-gray-700 mb-2">Examine data to find insights</p>
              <p className="text-sm text-gray-600">Tools: SQL, Excel, Tableau</p>
              <p className="text-sm text-gray-600 mt-2">The detective using evidence</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-500">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Data Engineer</h3>
              <p className="text-sm text-gray-700 mb-2">Build data infrastructure</p>
              <p className="text-sm text-gray-600">Tools: Airflow, Spark, Kafka</p>
              <p className="text-sm text-gray-600 mt-2">The plumber building systems</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-400">
              <h3 className="text-xl font-bold text-green-800 mb-3">Data Scientist</h3>
              <p className="text-sm text-gray-700 mb-2">Build predictive models</p>
              <p className="text-sm text-gray-600">Tools: Python, TensorFlow</p>
              <p className="text-sm text-gray-600 mt-2">The fortune teller predicting</p>
            </div>
          </div>
          <div className="bg-blue-600 text-white p-6 rounded-lg">
            <p className="text-xl font-semibold">Data Engineers build the foundation that enables analysts and scientists</p>
          </div>
        </div>
      )
    },
    {
      title: "Real-World Example: E-Commerce",
      content: (
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded border-2 border-gray-300">
            <h3 className="font-bold text-gray-800 mb-2">Business Need</h3>
            <p className="text-gray-700">Increase sales through personalized product recommendations on e-commerce platform</p>
          </div>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded shadow border-l-4 border-blue-500">
              <h4 className="font-bold text-gray-800">1. Data Collection</h4>
              <p className="text-sm text-gray-600">Capture clicks, views, purchases via Kafka streaming</p>
            </div>
            <div className="bg-white p-4 rounded shadow border-l-4 border-green-500">
              <h4 className="font-bold text-gray-800">2. Processing</h4>
              <p className="text-sm text-gray-600">Spark jobs clean and transform events, join with product catalog</p>
            </div>
            <div className="bg-white p-4 rounded shadow border-l-4 border-purple-500">
              <h4 className="font-bold text-gray-800">3. Features</h4>
              <p className="text-sm text-gray-600">dbt builds purchase history, browsing patterns, updated hourly</p>
            </div>
            <div className="bg-white p-4 rounded shadow border-l-4 border-orange-500">
              <h4 className="font-bold text-gray-800">4. Serving</h4>
              <p className="text-sm text-gray-600">Redis cache serves real-time recommendations via API</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded">
            <p className="font-bold text-lg mb-2">Typical Business Impact</p>
            <div className="grid grid-cols-3 gap-3 text-sm">
              <div>
                <p className="text-xl font-bold">~15-25%</p>
                <p className="text-xs">Conversion rate improvement</p>
              </div>
              <div>
                <p className="text-xl font-bold">~20-30%</p>
                <p className="text-xs">Increase in average order value</p>
              </div>
              <div>
                <p className="text-xl font-bold">~3-6mo</p>
                <p className="text-xs">Time to full implementation</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Enterprise Customer and Project Needs",
      content: (
        <div className="space-y-5">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border-2 border-blue-300">
            <h3 className="text-xl font-bold text-gray-800 mb-2">What Enterprise Customers Typically Need</h3>
            <p className="text-gray-700">Modern enterprises need comprehensive data solutions to stay competitive and drive digital transformation initiatives.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="bg-white border-2 border-blue-400 p-4 rounded-lg shadow">
                <h4 className="font-bold text-blue-800 mb-2">🔄 Data Integration and Consolidation</h4>
                <p className="text-sm text-gray-700 mb-2">Unified data from multiple sources (CRM, ERP, SaaS applications, legacy systems)</p>
                <p className="text-xs text-gray-600 italic">Key need: Break down data silos, create single source of truth</p>
              </div>

              <div className="bg-white border-2 border-green-400 p-4 rounded-lg shadow">
                <h4 className="font-bold text-green-800 mb-2">☁️ Cloud Migration and Modernization</h4>
                <p className="text-sm text-gray-700 mb-2">Move from on-premise to cloud data platforms with scalability</p>
                <p className="text-xs text-gray-600 italic">Key need: Reduce infrastructure costs, enable elastic scaling</p>
              </div>

              <div className="bg-white border-2 border-purple-400 p-4 rounded-lg shadow">
                <h4 className="font-bold text-purple-800 mb-2">⚡ Real-Time Data Processing</h4>
                <p className="text-sm text-gray-700 mb-2">Streaming pipelines for fraud detection, IoT, live dashboards</p>
                <p className="text-xs text-gray-600 italic">Key need: Instant insights for time-sensitive decisions</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-white border-2 border-orange-400 p-4 rounded-lg shadow">
                <h4 className="font-bold text-orange-800 mb-2">🤖 AI/ML Data Foundation</h4>
                <p className="text-sm text-gray-700 mb-2">ML-ready datasets, feature stores, model training infrastructure</p>
                <p className="text-xs text-gray-600 italic">Key need: Enable AI initiatives with quality training data</p>
              </div>

              <div className="bg-white border-2 border-red-400 p-4 rounded-lg shadow">
                <h4 className="font-bold text-red-800 mb-2">🔒 Data Governance and Compliance</h4>
                <p className="text-sm text-gray-700 mb-2">Lineage tracking, data cataloging, GDPR/CCPA compliance</p>
                <p className="text-xs text-gray-600 italic">Key need: Meet regulatory requirements, ensure data quality</p>
              </div>

              <div className="bg-white border-2 border-indigo-400 p-4 rounded-lg shadow">
                <h4 className="font-bold text-indigo-800 mb-2">📊 Advanced Analytics Platforms</h4>
                <p className="text-sm text-gray-700 mb-2">Self-service BI, embedded analytics, customer 360 views</p>
                <p className="text-xs text-gray-600 italic">Key need: Empower business users with data-driven insights</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 text-white p-4 rounded-lg">
            <p className="text-lg font-bold mb-2">Value Proposition</p>
            <p className="text-sm">Combine enterprise software expertise with modern data engineering capabilities to deliver end-to-end solutions that are both technically sound and business-aligned.</p>
          </div>
        </div>
      )
    },
    {
      title: "Architecture Evolution",
      content: (
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Traditional 2010s</h3>
            <div className="bg-gray-100 p-4 rounded border-2 border-gray-400 space-y-2">
              <div className="bg-white p-3 rounded shadow text-sm">Analytics Layer</div>
              <div className="text-center text-gray-500">↑</div>
              <div className="bg-white p-3 rounded shadow text-sm">Data Warehouse</div>
              <div className="text-center text-gray-500">↑</div>
              <div className="bg-white p-3 rounded shadow text-sm">ETL Tools</div>
              <div className="text-center text-gray-500">↑</div>
              <div className="bg-white p-3 rounded shadow text-sm">Source Systems</div>
            </div>
            <div className="bg-red-50 p-3 rounded text-xs mt-3">
              <p className="font-bold text-red-800">Limitations</p>
              <p>Expensive, fixed capacity, batch only</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Modern 2020s</h3>
            <div className="bg-blue-50 p-4 rounded border-2 border-blue-400 space-y-2">
              <div className="bg-white p-3 rounded shadow text-sm">Analytics and ML</div>
              <div className="text-center text-blue-500">↑</div>
              <div className="bg-white p-3 rounded shadow text-sm">Cloud Platform</div>
              <div className="text-center text-blue-500">↑</div>
              <div className="bg-white p-3 rounded shadow text-sm">Orchestration</div>
              <div className="text-center text-blue-500">↑</div>
              <div className="bg-white p-3 rounded shadow text-sm">All Sources</div>
            </div>
            <div className="bg-green-50 p-3 rounded text-xs mt-3">
              <p className="font-bold text-green-800">Advantages</p>
              <p>Elastic, real-time, all data types</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Three Architecture Patterns",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded border-2 border-blue-400">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Data Warehouse</h3>
              <p className="text-sm text-gray-700 mb-2">Structured data for BI</p>
              <p className="text-xs text-gray-600">Snowflake, BigQuery</p>
              <div className="bg-blue-100 p-2 rounded mt-2 text-xs">
                <p>Fast queries, easy use</p>
                <p>Structured only</p>
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded border-2 border-green-400">
              <h3 className="text-lg font-bold text-green-800 mb-2">Data Lake</h3>
              <p className="text-sm text-gray-700 mb-2">Store raw data cheaply</p>
              <p className="text-xs text-gray-600">S3, Azure Data Lake</p>
              <div className="bg-green-100 p-2 rounded mt-2 text-xs">
                <p>All types, low cost</p>
                <p>Can become swamp</p>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded border-2 border-purple-400">
              <h3 className="text-lg font-bold text-purple-800 mb-2">Lakehouse</h3>
              <p className="text-sm text-gray-700 mb-2">Best of both worlds</p>
              <p className="text-xs text-gray-600">Databricks, Delta Lake</p>
              <div className="bg-purple-100 p-2 rounded mt-2 text-xs">
                <p>Unified, flexible</p>
                <p>More complex</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 text-white p-4 rounded">
            <p className="font-bold mb-2">When to Use What</p>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-blue-300">Warehouse</p>
                <p className="text-xs">Standard BI reporting</p>
              </div>
              <div>
                <p className="text-green-300">Lake</p>
                <p className="text-xs">Archive ML training</p>
              </div>
              <div>
                <p className="text-purple-300">Lakehouse</p>
                <p className="text-xs">BI and ML together</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Three Core Architecture Patterns",
      content: (
        <div className="space-y-4 overflow-y-auto max-h-[600px]">
          <div className="space-y-4">
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-400">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">📊</div>
                <h3 className="text-2xl font-bold text-blue-800">Data Warehouse</h3>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-2">What it is:</p>
                  <p className="text-sm text-gray-700 leading-relaxed">A centralized repository that stores integrated data from multiple sources in a structured format. Data warehouses are optimized for complex queries and analysis, designed specifically for business intelligence and reporting workloads.</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-2">Key Characteristics:</p>
                  <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                    <li><strong>Schema-on-write:</strong> Data structure is defined before loading</li>
                    <li><strong>ACID compliance:</strong> Ensures data integrity with transactions</li>
                    <li><strong>Columnar storage:</strong> Optimized for analytical queries</li>
                    <li><strong>Query optimization:</strong> Built-in query engines for fast performance</li>
                    <li><strong>Historical data:</strong> Maintains time-variant data for trend analysis</li>
                    <li><strong>ETL processing:</strong> Extract, Transform, Load before storage</li>
                  </ul>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-2">Architecture Components:</p>
                  <p className="text-sm text-gray-700">Staging area → Integration layer → Presentation layer (star/snowflake schema)</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-2">Best Use Cases:</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• Business intelligence and dashboarding</li>
                    <li>• Financial reporting and compliance</li>
                    <li>• Historical trend analysis</li>
                    <li>• Structured transactional data analysis</li>
                    <li>• Enterprise-wide KPI tracking</li>
                  </ul>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-2">Popular Solutions:</p>
                  <p className="text-sm text-gray-700">Snowflake, Google BigQuery, Amazon Redshift, Azure Synapse Analytics, Teradata</p>
                </div>
                
                <div className="bg-blue-100 p-3 rounded mt-3">
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <p className="text-blue-900 font-semibold mb-1">Advantages:</p>
                      <p className="text-blue-800">✓ Fast query performance</p>
                      <p className="text-blue-800">✓ Mature ecosystem and tools</p>
                      <p className="text-blue-800">✓ Strong SQL support</p>
                      <p className="text-blue-800">✓ Data quality enforcement</p>
                    </div>
                    <div>
                      <p className="text-blue-900 font-semibold mb-1">Limitations:</p>
                      <p className="text-blue-800">✗ Only structured data</p>
                      <p className="text-blue-800">✗ Schema changes are costly</p>
                      <p className="text-blue-800">✗ Not ideal for raw/unstructured data</p>
                      <p className="text-blue-800">✗ Can be expensive at scale</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <a href="https://www.snowflake.com/guides/what-data-warehouse" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline mt-3 block font-semibold">Snowflake Data Warehouse Guide →</a>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-400">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">🌊</div>
                <h3 className="text-2xl font-bold text-green-800">Data Lake</h3>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-2">What it is:</p>
                  <p className="text-sm text-gray-700 leading-relaxed">A centralized repository that stores vast amounts of raw data in its native format. Data lakes can hold structured, semi-structured, and unstructured data at scale, making them ideal for big data and machine learning workloads.</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-2">Key Characteristics:</p>
                  <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                    <li><strong>Schema-on-read:</strong> Structure is applied when data is accessed</li>
                    <li><strong>Flexible storage:</strong> Handles any data type (files, logs, images, videos)</li>
                    <li><strong>Object storage:</strong> Built on scalable cloud storage (S3, ADLS, GCS)</li>
                    <li><strong>Low-cost storage:</strong> Economical for storing massive datasets</li>
                    <li><strong>Data lineage:</strong> Retains original raw data permanently</li>
                    <li><strong>ELT processing:</strong> Extract, Load, then Transform when needed</li>
                  </ul>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-2">Architecture Components:</p>
                  <p className="text-sm text-gray-700">Raw data zone → Processing zone → Curated zone (often Bronze/Silver/Gold layers)</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-2">Best Use Cases:</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• Machine learning and AI training data</li>
                    <li>• IoT and sensor data storage</li>
                    <li>• Log file aggregation and analysis</li>
                    <li>• Media file storage (images, videos, audio)</li>
                    <li>• Data science exploration and experimentation</li>
                  </ul>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-2">Popular Solutions:</p>
                  <p className="text-sm text-gray-700">AWS S3, Azure Data Lake Storage Gen2, Google Cloud Storage, Hadoop HDFS</p>
                </div>
                
                <div className="bg-green-100 p-3 rounded mt-3">
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <p className="text-green-900 font-semibold mb-1">Advantages:</p>
                      <p className="text-green-800">✓ Store any data type</p>
                      <p className="text-green-800">✓ Very low storage cost</p>
                      <p className="text-green-800">✓ Highly scalable</p>
                      <p className="text-green-800">✓ Flexible for future use cases</p>
                    </div>
                    <div>
                      <p className="text-green-900 font-semibold mb-1">Limitations:</p>
                      <p className="text-green-800">✗ Can become a "data swamp"</p>
                      <p className="text-green-800">✗ Requires governance</p>
                      <p className="text-green-800">✗ Performance not optimized</p>
                      <p className="text-green-800">✗ No built-in query engine</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <a href="https://aws.amazon.com/what-is/data-lake/" target="_blank" rel="noopener noreferrer" className="text-sm text-green-600 hover:underline mt-3 block font-semibold">AWS Data Lake Guide →</a>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-400">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">🏠</div>
                <h3 className="text-2xl font-bold text-purple-800">Lakehouse</h3>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-2">What it is:</p>
                  <p className="text-sm text-gray-700 leading-relaxed">A modern architecture that combines the best features of data warehouses and data lakes. Lakehouses provide warehouse-like performance and reliability on top of low-cost, flexible cloud storage, enabling both BI and ML workloads on a single platform.</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-2">Key Characteristics:</p>
                  <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                    <li><strong>ACID transactions on files:</strong> Delta Lake, Iceberg, Hudi provide transaction support</li>
                    <li><strong>Schema enforcement and evolution:</strong> Define schemas but allow changes over time</li>
                    <li><strong>Time travel:</strong> Query historical versions of data</li>
                    <li><strong>Unified platform:</strong> Single system for BI, ML, and streaming</li>
                    <li><strong>Open formats:</strong> Based on Parquet with metadata layers</li>
                    <li><strong>Direct SQL queries:</strong> Query data lake files with SQL engines</li>
                  </ul>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-2">Architecture Components:</p>
                  <p className="text-sm text-gray-700">Object storage (S3/ADLS) + Metadata layer (Delta/Iceberg) + Compute engines (Spark, Trino)</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-2">Best Use Cases:</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• Organizations needing both BI and ML on same data</li>
                    <li>• Real-time and batch analytics together</li>
                    <li>• Streaming data processing with analytics</li>
                    <li>• Cost-conscious enterprises wanting single platform</li>
                    <li>• Modern data architectures with open standards</li>
                  </ul>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-2">Popular Solutions:</p>
                  <p className="text-sm text-gray-700">Databricks (Delta Lake), Apache Iceberg, Apache Hudi, Dremio, Starburst</p>
                </div>
                
                <div className="bg-purple-100 p-3 rounded mt-3">
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <p className="text-purple-900 font-semibold mb-1">Advantages:</p>
                      <p className="text-purple-800">✓ Best of both worlds</p>
                      <p className="text-purple-800">✓ Lower cost than warehouse</p>
                      <p className="text-purple-800">✓ Single platform for all workloads</p>
                      <p className="text-purple-800">✓ Open standards, no lock-in</p>
                    </div>
                    <div>
                      <p className="text-purple-900 font-semibold mb-1">Limitations:</p>
                      <p className="text-purple-800">✗ Newer technology</p>
                      <p className="text-purple-800">✗ More complex to set up</p>
                      <p className="text-purple-800">✗ Requires skilled engineers</p>
                      <p className="text-purple-800">✗ Evolving ecosystem</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <a href="https://www.databricks.com/glossary/data-lakehouse" target="_blank" rel="noopener noreferrer" className="text-sm text-purple-600 hover:underline mt-3 block font-semibold">Databricks Lakehouse Guide →</a>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-5 rounded-lg mt-4">
            <p className="text-xl font-bold mb-4">Decision Framework: When to Use What?</p>
            <div className="grid grid-cols-3 gap-6 text-sm">
              <div className="border-r border-gray-600 pr-4">
                <p className="font-semibold text-blue-300 mb-2">Data Warehouse</p>
                <p className="text-xs leading-relaxed">Choose when you have well-defined BI requirements, primarily structured data, need guaranteed query performance, and have budget for premium services. Best for traditional BI teams.</p>
              </div>
              <div className="border-r border-gray-600 px-4">
                <p className="font-semibold text-green-300 mb-2">Data Lake</p>
                <p className="text-xs leading-relaxed">Choose when you need to store diverse data types cheaply, aren't sure of future use cases, primarily support data science teams, or have massive volumes of unstructured data.</p>
              </div>
              <div className="pl-4">
                <p className="font-semibold text-purple-300 mb-2">Lakehouse</p>
                <p className="text-xs leading-relaxed">Choose when you need both BI and ML workloads, want to avoid data duplication and movement, require real-time and batch together, or prefer open standards and flexibility.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mt-4">
            <p className="text-sm text-gray-800"><span className="font-semibold">Industry Trend (Gartner 2024):</span> Many enterprises are adopting lakehouse architectures to reduce complexity, eliminate data silos, and support both traditional analytics and modern AI workloads on a single platform.</p>
          </div>
        </div>
      )
    },
    {
      title: "Medallion Architecture: Bronze, Silver, Gold Layers",
      content: (
        <div className="space-y-5">
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-lg border-2 border-amber-300">
            <h3 className="text-xl font-bold text-gray-800 mb-2">The Medallion Architecture Pattern</h3>
            <p className="text-gray-700">A data design pattern for organizing data in a lakehouse with progressive levels of quality and refinement. This is the industry standard approach for modern data platforms.</p>
          </div>

          <div className="space-y-3">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-5 rounded-lg shadow-md">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">🥉</div>
                <h3 className="text-xl font-bold text-amber-900">Bronze Layer (Raw Data)</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-gray-800"><span className="font-semibold">Purpose:</span> Landing zone for all raw data exactly as received from source systems</p>
                <p className="text-gray-800"><span className="font-semibold">Characteristics:</span> Unprocessed, unchanged from source, full history retained, append-only</p>
                <p className="text-gray-800"><span className="font-semibold">Format:</span> Native formats - JSON, CSV, Parquet, Avro, XML as received</p>
                <p className="text-gray-800"><span className="font-semibold">Use Cases:</span> Data recovery, audit trail, reprocessing, compliance requirements</p>
              </div>
            </div>

            <div className="bg-gray-50 border-l-4 border-gray-500 p-5 rounded-lg shadow-md">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-gray-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">🥈</div>
                <h3 className="text-xl font-bold text-gray-800">Silver Layer (Cleaned Data)</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-gray-800"><span className="font-semibold">Purpose:</span> Validated, cleaned, and enriched enterprise data ready for analysis</p>
                <p className="text-gray-800"><span className="font-semibold">Characteristics:</span> Deduplicated, standardized formats, type conversions applied, quality checks passed</p>
                <p className="text-gray-800"><span className="font-semibold">Format:</span> Optimized columnar formats (Parquet, Delta, Iceberg), partitioned by date/region</p>
                <p className="text-gray-800"><span className="font-semibold">Use Cases:</span> Source for gold layer, data science exploration, ad-hoc analysis</p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-5 rounded-lg shadow-md">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-yellow-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">🥇</div>
                <h3 className="text-xl font-bold text-yellow-900">Gold Layer (Business Data)</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-gray-800"><span className="font-semibold">Purpose:</span> Curated, aggregated, business-ready datasets optimized for consumption</p>
                <p className="text-gray-800"><span className="font-semibold">Characteristics:</span> Joined across sources, aggregated metrics, conformed dimensions, business logic applied</p>
                <p className="text-gray-800"><span className="font-semibold">Format:</span> Star/snowflake schema, denormalized tables, fact and dimension tables</p>
                <p className="text-gray-800"><span className="font-semibold">Use Cases:</span> BI dashboards, ML features, operational reporting, API serving</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-5 rounded-lg">
            <p className="font-bold text-xl mb-3">Benefits of Medallion Architecture</p>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="space-y-1">
                <p className="font-semibold">✓ Clear Data Lineage</p>
                <p className="text-xs opacity-90">Track data from source to consumption</p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold">✓ Easier Debugging</p>
                <p className="text-xs opacity-90">Isolate issues by layer</p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold">✓ Separation of Concerns</p>
                <p className="text-xs opacity-90">Each layer has clear purpose</p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold">✓ Incremental Processing</p>
                <p className="text-xs opacity-90">Process only new/changed data</p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold">✓ Quality Gates</p>
                <p className="text-xs opacity-90">Validate at each stage</p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold">✓ Scalable Pattern</p>
                <p className="text-xs opacity-90">Works for any data volume</p>
              </div>
            </div>
          </div>
          
          <div className="text-center space-y-2">
            <a href="https://www.databricks.com/glossary/medallion-architecture" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold text-sm">Databricks: Medallion Architecture Guide →</a>
            <p className="text-xs text-gray-600">This pattern is recommended by Databricks, Snowflake, and most modern data platform vendors</p>
          </div>
        </div>
      )
    },
    {
      title: "Understanding Data File Formats",
      content: (
        <div className="space-y-5">
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-4 rounded-lg border-2 border-indigo-300">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Why File Formats Matter</h3>
            <p className="text-gray-700">Choosing the right data format impacts storage costs, query performance, and compatibility. Modern data engineering uses specialized formats optimized for different workloads.</p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-4">
              <div className="bg-white border-2 border-gray-400 p-5 rounded-lg shadow-md">
                <h4 className="font-bold text-gray-800 mb-3 text-lg flex items-center">
                  <span className="mr-2">📄</span> Row-Based Formats
                </h4>
                
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-semibold text-gray-900 mb-2">CSV (Comma-Separated Values)</p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li><strong>Use case:</strong> Data exchange, simple data exports</li>
                      <li><strong>Pros:</strong> Human-readable, universal compatibility</li>
                      <li><strong>Cons:</strong> No compression, no schema, slow to parse</li>
                      <li><strong>When to use:</strong> Simple data sharing, small datasets</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-semibold text-gray-900 mb-2">JSON (JavaScript Object Notation)</p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li><strong>Use case:</strong> Semi-structured data, APIs, logs</li>
                      <li><strong>Pros:</strong> Flexible schema, nested structures, readable</li>
                      <li><strong>Cons:</strong> Verbose, slower parsing, larger file sizes</li>
                      <li><strong>When to use:</strong> API responses, configuration files, event logs</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-semibold text-gray-900 mb-2">Avro</p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li><strong>Use case:</strong> Data serialization, streaming pipelines</li>
                      <li><strong>Pros:</strong> Compact binary, schema evolution, fast serialization</li>
                      <li><strong>Cons:</strong> Not human-readable, requires schema</li>
                      <li><strong>When to use:</strong> Kafka messages, data exchange between systems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white border-2 border-blue-400 p-5 rounded-lg shadow-md">
                <h4 className="font-bold text-blue-800 mb-3 text-lg flex items-center">
                  <span className="mr-2">📊</span> Columnar Formats
                </h4>
                
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded">
                    <p className="font-semibold text-blue-900 mb-2">Parquet</p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li><strong>Use case:</strong> Analytics, data lakes, OLAP queries</li>
                      <li><strong>Pros:</strong> Excellent compression, fast column reads, widely supported</li>
                      <li><strong>Cons:</strong> Write-heavy operations slower, not for row-wise access</li>
                      <li><strong>When to use:</strong> Data warehouse tables, analytical workloads</li>
                      <li><strong>Typical compression:</strong> 5-10x smaller than CSV</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-3 rounded">
                    <p className="font-semibold text-blue-900 mb-2">ORC (Optimized Row Columnar)</p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li><strong>Use case:</strong> Hadoop ecosystems, Hive tables</li>
                      <li><strong>Pros:</strong> Better compression than Parquet, built-in indexes</li>
                      <li><strong>Cons:</strong> Less ecosystem support than Parquet</li>
                      <li><strong>When to use:</strong> Hive-based data warehouses, Hadoop clusters</li>
                      <li><strong>Typical compression:</strong> 8-12x smaller than CSV</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-purple-400 p-5 rounded-lg shadow-md">
                <h4 className="font-bold text-purple-800 mb-3 text-lg flex items-center">
                  <span className="mr-2">🏠</span> Lakehouse Formats
                </h4>
                
                <div className="space-y-3">
                  <div className="bg-purple-50 p-3 rounded">
                    <p className="font-semibold text-purple-900 mb-2">Delta Lake</p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li><strong>Use case:</strong> ACID transactions on data lakes</li>
                      <li><strong>Built on:</strong> Parquet + transaction log</li>
                      <li><strong>Pros:</strong> Time travel, ACID, schema enforcement, upserts/deletes</li>
                      <li><strong>Cons:</strong> Databricks ecosystem, additional metadata overhead</li>
                      <li><strong>When to use:</strong> Lakehouse architectures, streaming + batch</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-3 rounded">
                    <p className="font-semibold text-purple-900 mb-2">Apache Iceberg</p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li><strong>Use case:</strong> Open lakehouse table format</li>
                      <li><strong>Built on:</strong> Parquet/ORC + metadata layer</li>
                      <li><strong>Pros:</strong> Open standard, hidden partitioning, time travel</li>
                      <li><strong>Cons:</strong> Newer, requires compatible query engines</li>
                      <li><strong>When to use:</strong> Multi-engine lakehouses, avoid vendor lock-in</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-3 rounded">
                    <p className="font-semibold text-purple-900 mb-2">Apache Hudi</p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li><strong>Use case:</strong> Incremental data processing</li>
                      <li><strong>Built on:</strong> Parquet + indexing</li>
                      <li><strong>Pros:</strong> Fast upserts, incremental queries, record-level updates</li>
                      <li><strong>Cons:</strong> More complex than Delta/Iceberg</li>
                      <li><strong>When to use:</strong> CDC pipelines, near real-time updates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-5 rounded-lg">
            <p className="text-xl font-bold mb-4">Format Selection Guide</p>
            <div className="grid grid-cols-4 gap-4 text-xs">
              <div>
                <p className="font-semibold text-yellow-300 mb-2">For Data Exchange</p>
                <p>CSV for simple, JSON for flexible, Avro for streaming</p>
              </div>
              <div>
                <p className="font-semibold text-blue-300 mb-2">For Analytics</p>
                <p>Parquet (most common) or ORC (Hadoop-heavy)</p>
              </div>
              <div>
                <p className="font-semibold text-purple-300 mb-2">For Lakehouses</p>
                <p>Delta Lake (Databricks), Iceberg (open), Hudi (upserts)</p>
              </div>
              <div>
                <p className="font-semibold text-green-300 mb-2">For Raw Storage</p>
                <p>Keep original format in Bronze, convert to Parquet in Silver</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-3">
            <p className="text-sm text-gray-800"><span className="font-semibold">Best Practice:</span> Use CSV/JSON for ingestion and data exchange, convert to Parquet for storage and analytics, and use Delta/Iceberg/Hudi for lakehouse features like ACID transactions and time travel.</p>
          </div>

          <div className="text-center space-y-1">
            <a href="https://parquet.apache.org/docs/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm font-semibold mr-4">Apache Parquet Docs →</a>
            <a href="https://delta.io/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline text-sm font-semibold mr-4">Delta Lake →</a>
            <a href="https://iceberg.apache.org/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline text-sm font-semibold">Apache Iceberg →</a>
          </div>
        </div>
      )
    },
    {
      title: "Gen AI Revolution: Why Data is More Critical Than Ever",
      content: (
        <div className="space-y-5">
          <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 p-5 rounded-lg border-2 border-purple-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">The Generative AI Data Imperative</h3>
            <p className="text-lg text-gray-700">Generative AI has fundamentally changed how enterprises think about data. Quality, governance, and infrastructure are no longer optional—they're competitive necessities.</p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-4">
              <div className="bg-white border-2 border-purple-400 p-5 rounded-lg shadow-md">
                <h4 className="font-bold text-purple-800 mb-3 text-lg flex items-center">
                  <span className="mr-2">🤖</span> New Data Requirements for Gen AI
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">•</span>
                    <span><strong>Massive training datasets:</strong> LLMs need petabytes of high-quality, diverse data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">•</span>
                    <span><strong>RAG pipelines:</strong> Retrieval-Augmented Generation requires real-time access to enterprise knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">•</span>
                    <span><strong>Vector databases:</strong> Embeddings and semantic search infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">•</span>
                    <span><strong>Fine-tuning data:</strong> Domain-specific datasets to customize models</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">•</span>
                    <span><strong>Prompt engineering data:</strong> Context, examples, and historical interactions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-blue-400 p-5 rounded-lg shadow-md">
                <h4 className="font-bold text-blue-800 mb-3 text-lg flex items-center">
                  <span className="mr-2">📊</span> Data Quality is Now Mission-Critical
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">•</span>
                    <span><strong>Garbage in, garbage out:</strong> AI amplifies data quality issues exponentially</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">•</span>
                    <span><strong>Bias and fairness:</strong> Poor data leads to biased AI outputs and reputational risk</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">•</span>
                    <span><strong>Hallucinations:</strong> LLMs generate false information when data is incomplete or inconsistent</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">•</span>
                    <span><strong>Trust and compliance:</strong> Regulatory requirements (EU AI Act, etc.) demand data lineage</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white border-2 border-green-400 p-5 rounded-lg shadow-md">
                <h4 className="font-bold text-green-800 mb-3 text-lg flex items-center">
                  <span className="mr-2">💰</span> The Business Case
                </h4>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded">
                    <p className="font-semibold text-green-900 text-sm mb-1">Market Size</p>
                    <p className="text-xs text-gray-700">Gen AI market projected to reach $1.3 trillion by 2032 (Bloomberg Intelligence)</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <p className="font-semibold text-green-900 text-sm mb-1">Enterprise Adoption</p>
                    <p className="text-xs text-gray-700">79% of enterprises are piloting or implementing Gen AI (Gartner 2024)</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <p className="font-semibold text-green-900 text-sm mb-1">Data Investment</p>
                    <p className="text-xs text-gray-700">Companies increasing data infrastructure spend by 40% to support AI (IDC)</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <p className="font-semibold text-green-900 text-sm mb-1">Competitive Advantage</p>
                    <p className="text-xs text-gray-700">Organizations with mature data practices are 2x more likely to succeed with AI</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-orange-400 p-5 rounded-lg shadow-md">
                <h4 className="font-bold text-orange-800 mb-3 text-lg flex items-center">
                  <span className="mr-2">🛠️</span> What This Means
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">•</span>
                    <span>Every enterprise needs <strong>AI-ready data infrastructure</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">•</span>
                    <span><strong>Vector databases</strong> and <strong>embedding pipelines</strong> are new core services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">•</span>
                    <span><strong>Data governance</strong> is no longer optional—it's required for AI compliance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">•</span>
                    <span><strong>Real-time data</strong> enables contextual AI applications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white p-5 rounded-lg">
            <p className="text-xl font-bold mb-3">The Bottom Line</p>
            <p className="text-base leading-relaxed">Without strong data engineering foundations, enterprises cannot effectively leverage Gen AI. Right data engineering practice will help in the perfect positioning to help customers unlock the full potential of AI.</p>
          </div>

          <div className="bg-gray-100 border border-gray-300 p-3 rounded text-xs text-gray-600">
            <p className="font-semibold mb-1">Sources:</p>
            <p>Bloomberg Intelligence Gen AI Market Forecast 2024, Gartner AI Adoption Survey 2024, IDC Data Infrastructure Spending Analysis 2024, McKinsey State of AI Report 2024</p>
          </div>
        </div>
      )
    },
    {
      title: "Batch vs. Streaming Processing",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded border-2 border-blue-400">
              <div className="flex items-center space-x-3 mb-3">
                <Database className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold text-blue-800">Batch</h3>
              </div>
              <p className="text-sm text-gray-700 mb-2">Process at intervals</p>
              <p className="text-sm text-gray-600 mb-2">Monthly reports, ML training</p>
              <p className="text-sm text-gray-600 mb-2">Tools: Spark, dbt, Airflow</p>
              <div className="bg-blue-100 p-2 rounded mt-3 text-xs">
                <p>Cost effective, simpler</p>
              </div>
              <a href="https://spark.apache.org/docs/latest/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline mt-2 block">Apache Spark docs →</a>
              <a href="https://docs.getdbt.com/docs/introduction" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline mt-2 block">dbt docs →</a>
              <a href="https://airflow.apache.org/docs/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline mt-2 block">Apache Airflow docs →</a>
            </div>
            <div className="bg-orange-50 p-6 rounded border-2 border-orange-400">
              <div className="flex items-center space-x-3 mb-3">
                <Zap className="w-8 h-8 text-orange-600" />
                <h3 className="text-xl font-bold text-orange-800">Streaming</h3>
              </div>
              <p className="text-sm text-gray-700 mb-2">Process continuously</p>
              <p className="text-sm text-gray-600 mb-2">Fraud detection, real-time rec</p>
              <p className="text-sm text-gray-600 mb-2">Tools: Kafka, Flink</p>
              <div className="bg-orange-100 p-2 rounded mt-3 text-xs">
                <p>Immediate insights, complex</p>
              </div>
              <a href="https://kafka.apache.org/documentation/" target="_blank" rel="noopener noreferrer" className="text-xs text-orange-600 hover:underline mt-2 block">Apache Kafka docs →</a>
              <a href="https://flink.apache.org/" target="_blank" rel="noopener noreferrer" className="text-xs text-orange-600 hover:underline mt-2 block">Apache Flink docs →</a>
            </div>
          </div>
          <div className="bg-gray-800 text-white p-4 rounded">
            <p className="font-bold mb-2">Most Systems Use Both</p>
            <p className="text-sm">Streaming for real-time insights, batch for historical reports and ML training</p>
          </div>
        </div>
      )
    },
    {
      title: "Cloud Platforms",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-orange-50 p-4 rounded border-2 border-orange-400">
              <h3 className="text-lg font-bold text-orange-800 mb-3">AWS</h3>
              <div className="text-sm space-y-2">
                <p><span className="font-semibold">Warehouse:</span> Redshift</p>
                <p><span className="font-semibold">Lake:</span> S3</p>
                <p><span className="font-semibold">ETL:</span> Glue, EMR</p>
                <p><span className="font-semibold">Stream:</span> Kinesis</p>
              </div>
              <div className="bg-orange-100 p-2 rounded mt-3 text-xs">
                <p>Market leader, mature</p>
              </div>
              <a href="https://aws.amazon.com/big-data/datalakes-and-analytics/" target="_blank" rel="noopener noreferrer" className="text-xs text-orange-600 hover:underline mt-2 block">AWS Data Services →</a>
            </div>
            <div className="bg-blue-50 p-4 rounded border-2 border-blue-400">
              <h3 className="text-lg font-bold text-blue-800 mb-3">Azure</h3>
              <div className="text-sm space-y-2">
                <p><span className="font-semibold">Warehouse:</span> Synapse</p>
                <p><span className="font-semibold">Lake:</span> Data Lake Gen2</p>
                <p><span className="font-semibold">ETL:</span> Data Factory</p>
                <p><span className="font-semibold">Stream:</span> Event Hubs</p>
              </div>
              <div className="bg-blue-100 p-2 rounded mt-3 text-xs">
                <p>Best for Microsoft shops</p>
              </div>
              <a href="https://azure.microsoft.com/en-us/solutions/data-analytics" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline mt-2 block">Azure Data Services →</a>
            </div>
            <div className="bg-green-50 p-4 rounded border-2 border-green-400">
              <h3 className="text-lg font-bold text-green-800 mb-3">GCP</h3>
              <div className="text-sm space-y-2">
                <p><span className="font-semibold">Warehouse:</span> BigQuery</p>
                <p><span className="font-semibold">Lake:</span> Cloud Storage</p>
                <p><span className="font-semibold">ETL:</span> Dataflow</p>
                <p><span className="font-semibold">Stream:</span> Pub/Sub</p>
              </div>
              <div className="bg-green-100 p-2 rounded mt-3 text-xs">
                <p>Best analytics, serverless</p>
              </div>
              <a href="https://cloud.google.com/solutions/smart-analytics" target="_blank" rel="noopener noreferrer" className="text-xs text-green-600 hover:underline mt-2 block">GCP Data Services →</a>
            </div>
          </div>
          <div className="bg-gray-800 text-white p-4 rounded">
            <p className="font-bold">Recommendation: Build cloud-agnostic skills first</p>
          </div>
        </div>
      )
    },
    {
      title: "Modern Tool Landscape",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-800 mb-2">Orchestration</h4>
              <p className="text-sm mb-1">Apache Airflow - Industry standard</p>
              <a href="https://airflow.apache.org/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">airflow.apache.org →</a>
              <p className="text-sm mt-2">Prefect, Dagster - Modern alternatives</p>
            </div>
            <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
              <h4 className="font-bold text-green-800 mb-2">Processing</h4>
              <p className="text-sm mb-1">Apache Spark - Big data processing</p>
              <a href="https://spark.apache.org/" target="_blank" rel="noopener noreferrer" className="text-xs text-green-600 hover:underline">spark.apache.org →</a>
              <p className="text-sm mt-2 mb-1">dbt - SQL transformations</p>
              <a href="https://www.getdbt.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-green-600 hover:underline">getdbt.com →</a>
            </div>
            <div className="bg-orange-50 p-4 rounded border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-800 mb-2">Streaming</h4>
              <p className="text-sm mb-1">Apache Kafka - Event streaming</p>
              <a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer" className="text-xs text-orange-600 hover:underline">kafka.apache.org →</a>
              <p className="text-sm mt-2">Apache Flink - Stream processing</p>
              <a href="https://flink.apache.org/" target="_blank" rel="noopener noreferrer" className="text-xs text-orange-600 hover:underline">flink.apache.org →</a>
            </div>
            <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-800 mb-2">Warehouses</h4>
              <p className="text-sm mb-1">Snowflake - Cloud native</p>
              <a href="https://www.snowflake.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-purple-600 hover:underline">snowflake.com →</a>
              <p className="text-sm mt-2 mb-1">BigQuery - Serverless</p>
              <a href="https://cloud.google.com/bigquery" target="_blank" rel="noopener noreferrer" className="text-xs text-purple-600 hover:underline">BigQuery docs →</a>
            </div>
          </div>
          <div className="bg-gray-800 text-white p-4 rounded">
            <p className="font-bold mb-2">Modern Data Stack Pattern</p>
            <p className="text-sm">Fivetran (ingestion) → Snowflake (storage) → dbt (transformation) → Looker (BI) → Airflow (orchestration)</p>
          </div>
        </div>
      )
    },
    {
      title: "Customer 360 Platform Example",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded border-2 border-blue-300">
            <h3 className="font-bold text-gray-800 mb-2">Business Problem</h3>
            <p className="text-gray-700">A retail bank needs a unified customer view across all touchpoints (mobile app, website, branches, call center, transactions) to improve service and identify opportunities.</p>
          </div>
          <div className="space-y-2">
            <div className="bg-white p-3 rounded shadow border-l-4 border-blue-500">
              <h4 className="font-bold text-sm">1. Data Sources</h4>
              <p className="text-xs text-gray-600">15+ systems: Core banking, CRM, mobile app, web analytics, call center, credit cards</p>
            </div>
            <div className="bg-white p-3 rounded shadow border-l-4 border-green-500">
              <h4 className="font-bold text-sm">2. Landing Zone (Bronze Layer)</h4>
              <p className="text-xs text-gray-600">Store all raw data in S3 with partitioning by date and source</p>
            </div>
            <div className="bg-white p-3 rounded shadow border-l-4 border-purple-500">
              <h4 className="font-bold text-sm">3. Processing (Silver Layer)</h4>
              <p className="text-xs text-gray-600">Spark and dbt clean, standardize, deduplicate customer records</p>
            </div>
            <div className="bg-white p-3 rounded shadow border-l-4 border-orange-500">
              <h4 className="font-bold text-sm">4. Warehouse (Gold Layer)</h4>
              <p className="text-xs text-gray-600">Snowflake dimensional model: customer dimension, product dimension, transaction facts</p>
            </div>
            <div className="bg-white p-3 rounded shadow border-l-4 border-red-500">
              <h4 className="font-bold text-sm">5. Consumption</h4>
              <p className="text-xs text-gray-600">REST API for call centers, Tableau dashboards, ML features for next-best-action</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-4 rounded">
            <p className="font-bold text-lg mb-2">Typical Project Outcomes</p>
            <div className="grid grid-cols-3 gap-3 text-sm">
              <div>
                <p className="text-xl font-bold">360°</p>
                <p className="text-xs">Complete unified view</p>
              </div>
              <div>
                <p className="text-xl font-bold">~30-50%</p>
                <p className="text-xs">Improvement in key metrics</p>
              </div>
              <div>
                <p className="text-xl font-bold">~6-12mo</p>
                <p className="text-xs">Implementation timeline</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Questions",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <div className="text-8xl">💬</div>
          <h2 className="text-4xl font-bold text-gray-800">Open Discussion</h2>
          <div className="max-w-2xl space-y-3">
            <p className="text-lg text-gray-700 font-semibold">Questions to consider:</p>
            <ul className="space-y-2 text-gray-600">
              <li>What customer problems could you solve?</li>
              <li>What skills gaps do you see?</li>
              <li>What concerns about this space?</li>
              <li>Which cloud platform to prioritize?</li>
              <li>How do you differentiate from competitors?</li>
            </ul>
          </div>
          <div className="bg-blue-50 border-2 border-blue-300 p-6 rounded-lg max-w-2xl">
            <p className="text-center text-gray-700">
              You can help shape the data engineering practice!
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      <div className="bg-white shadow-md p-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Data Engineering</h1>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">Slide {currentSlide + 1} of {slides.length}</p>
        </div>
      </div>

      <div className="flex-1 overflow-hidden p-8">
        <div className="bg-white rounded-lg shadow-xl h-full p-8 overflow-y-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{slides[currentSlide].title}</h2>
          <div className="h-full">
            {slides[currentSlide].content}
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md p-4 flex justify-between items-center">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
            currentSlide === 0
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Previous</span>
        </button>

        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
            currentSlide === slides.length - 1
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          <span>Next</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default DataEngineeringPresentation;
                